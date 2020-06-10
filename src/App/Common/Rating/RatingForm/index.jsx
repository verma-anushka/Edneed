import React, { Component } from "react";
import { connect } from "react-redux";

import { Form, Button, Spinner } from "react-bootstrap";
import PropTypes, { string, oneOf } from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { MapStateToProps, MapDispatchToProps } from "../RatingMapDispatch";


class RatingForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fill   : props.fill,
            rating : props.rating
        }
    }

    onRatingFormSubmit = e => {
        e.preventDefault();
        const { kind, user_id, ref_id, limit } = this.props;
        this.props.setRating(kind, this.state.fill, user_id, ref_id, limit);
    }

    onRate = rate => {
        this.setState(prevState => {
            return {
                ...prevState,
                fill: rate
            }
        });
    }

    makeStar = (limit = 5) => {

        let allStars = [];

        for (let idx=1; idx <= limit; idx++) {

            allStars.push(  
                            <Form.Label 
                                key={ idx }
                                style={{ cursor: "pointer" }} 
                                onMouseOver={ () => this.onRate(idx) } 
                                onMouseLeave={ () => idx === 1 ? this.onRate(0) : void(0) } >
                                    <FontAwesomeIcon icon={ faStar } className={ this.state.fill >= idx ? 'text-warning' : 'text-light' } />
                            </Form.Label>
                        )
        }

        return allStars;
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.props.ratingstate.loading ? 
                        <div className="text-center">
                            <Spinner animation="border" size="sm" variant="success" className="text-center" />
                        </div>
                        :
                        <Form onSubmit={ event => this.onRatingFormSubmit(event) } className="text-center">
                            Give your rating: {" "}
                            { this.makeStar(this.state.rating) }
                            <Button type="submit" size="sm" variant="outline-success">Submit</Button>
                        </Form>
                }

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

