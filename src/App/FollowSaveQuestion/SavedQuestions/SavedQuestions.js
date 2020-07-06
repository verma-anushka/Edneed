import React, { Component } from 'react';
import { connect } from "react-redux";

import QuestionsList from "../QuestionsListFollow&Save";
import { MapStateToProps, MapDispatchToProps } from "./SavedQuestionsMapDispatch";

const limit = 3;
const user_id = "5d0c6dc641b9836dabb766b4";

class SavedQuestions extends Component {
    
    componentDidMount() {
        this.props.getSavedQuestions(limit, user_id);
    }

    LoadMoreQuestions = skip => {
        this.props.getMoreSavedQuestions(limit, user_id, skip);
    }

    render() {
        return(
            <React.Fragment>
                <QuestionsList questions={this.props.questions} LoadMoreQuestions={this.LoadMoreQuestions} />
            </React.Fragment>
        )
    }

}

export default connect(MapStateToProps, MapDispatchToProps)( SavedQuestions );

