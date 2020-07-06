import { GetFollowQuestions, GetMoreFollowQuestions } from "../../../store/actions/questions/followedquestions";

export const MapStateToProps = state => {
    return {
        questions: state.followQuestions
    }
};

export const MapDispatchToProps = dispatch => {
    return {
        getFollowQuestions: (limit, id) => dispatch(GetFollowQuestions(limit, id)),
        getMoreFollowQuestions: (limit, id, skip) => dispatch(GetMoreFollowQuestions(limit, id, skip))
    }
}

 