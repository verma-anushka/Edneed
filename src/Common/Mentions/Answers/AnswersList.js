import React, { Component } from 'react';
import { connect } from "react-redux";
import { Row, Spinner } from 'react-bootstrap';

import AnswersCard from "./AnswersCard";
import { MapStateToProps, MapDispatchToProps } from "../MentionsMapDispatch";

const limit=10;
const postid="5eea16ff4408001b6ca9de32";

class AnswersList extends Component {

    componentDidMount() {
        this.props.getanswers(postid, limit);
    }

    render() {

        const { getanswers } = this.props.usersState;
        return <React.Fragment> {
                    getanswers.loading ?
                        <div className="text-center p-3">
                            <Spinner animation="border" variant="success" size="lg" ></Spinner>
                        </div>
                        :
                        <Row style={{ margin:"15px" }}>
                            {getanswers.data.map((answerItem, answerItemIndex) => 
                                <AnswersCard
                                    key={answerItemIndex}
                                    text={answerItem.text}
                                />
                            )}          
                        </Row>
                    }
                </React.Fragment>
    }
}


export default connect(MapStateToProps, MapDispatchToProps)( AnswersList );

