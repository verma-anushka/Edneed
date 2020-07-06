import { GetSavedQuestions, GetMoreSavedQuestions } from "../../../store/actions/questions/savedquestions";

export const MapStateToProps = state => {
    return {
        questions: state.savedQuestions
    }
};

export const MapDispatchToProps = dispatch => {
    return {
        getSavedQuestions: (limit, id) => dispatch(GetSavedQuestions(limit, id)),
        getMoreSavedQuestions: (limit, id, skip) => dispatch(GetMoreSavedQuestions(limit, id, skip))
    }
}

 