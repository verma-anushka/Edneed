import React, { Component } from 'react';
import { connect } from "react-redux";

import QuestionsList from "../QuestionsListFollow&Save";
import { MapStateToProps, MapDispatchToProps } from "./FollowedQuestionsMapDispatch";

const id = "5bf681136e634e63594688f6";
const limit = 2;

class Questions extends Component {
    
    componentDidMount() {
        this.props.getFollowQuestions(limit, id);
    }

    LoadMoreQuestions = skip => {
        this.props.getMoreFollowQuestions(limit, id, skip);
    }

    render() {
        return(
            <React.Fragment>
                <QuestionsList questions={this.props.questions} LoadMoreQuestions={this.LoadMoreQuestions} />
            </React.Fragment>
        )
    }

}

export default connect(MapStateToProps, MapDispatchToProps)( Questions );

