import React, { Component } from "react";
import { connect } from "react-redux";

import { Form, Button, Spinner, Row, Col } from "react-bootstrap";
import PropTypes, { string, oneOf } from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { MapStateToProps, MapDispatchToProps } from "../RatingMapDispatch";


class RatingForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fill   : props.fill,
            rating : props.rating,
            review : ""
        }
    }

    onFormSubmit = e => {
        e.preventDefault();
        const { kind, user_id, ref_id, limit } = this.props;
        this.props.setRating(kind, this.state.fill, this.state.review, user_id, ref_id, limit);
    }

    onRate = rate => {
        this.setState(prevState => {
            return {
                ...prevState,
                fill: rate 
            }
        });
    }

    onChange = e => {

        const value=e.target.value;
        this.setState(prevState => {
            return {
                ...prevState,
                review: value
            }
        })
    }

    makeStar = (limit = 5) => {

        let allStars = [];

        for (let idx=1; idx <= limit; idx++) {
            allStars.push(  
                            <Form.Label 
                                key={ idx }
                                style={{ cursor: "pointer" }} 
                                onMouseOver={ () => this.onRate(idx) } 
                                onMouseLeave={ () => idx === 1 ? this.onRate(1) : void(0) } >
                                    <FontAwesomeIcon icon={ faStar } className={ this.state.fill >= idx ? 'text-warning' : 'text-light' } />
                            </Form.Label>
                        )
        }

        return allStars;
    }

    render() {
        return (
            <React.Fragment>
                <Col md={{ offset: 1, span: 10 }} lg={{ offset: 1, span: 10 }} sm={ 12 }>
                {
                    this.props.ratingstate.loading ? 
                        <div className="text-center">
                            <Spinner animation="border" size="sm" variant="success" className="text-center" />
                        </div>
                        :
                        <Form onSubmit={ event => this.onFormSubmit(event) } className="">
                            <Form.Group as={Row} >
                                <Col md="1" sm="1">
                                    Rating: {" "}
                                </Col>
                                <Col md="8" sm="8">
                                    { this.makeStar(this.state.rating) }
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} >
                                <Form.Label column md="1" sm="1">Review:</Form.Label>
                                <Col md="11" sm="11">
                                    <Form.Control type="text" name="review" value={this.state.review} placeholder="Enter your review.." onChange={this.onChange} />
                                </Col>
                            </Form.Group>
                            <div className="text-center mb-2">
                                <Button type="submit" size="sm" variant="outline-success">Submit</Button>
                            </div>
                        </Form>
                }
                </Col>

            </React.Fragment>
        )
    }

}

RatingForm.defaultProps = {
    fill   : 0,
    rating : 5
}

RatingForm.propTypes = {
    
    fill    : PropTypes.number,
    rating  : PropTypes.number,

    kind    : oneOf(['post', 'course', 'fs']),
    ref_id  : string.isRequired,
    user_id : string.isRequired

}

export default connect(MapStateToProps, MapDispatchToProps)( RatingForm );

