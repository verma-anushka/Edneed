import { GetUsers, SaveAnswer, GetAnswers } from "../../../store/actions/mentions";

export const MapStateToProps = state => {
    return{
        usersState: state.users
    }
};

export const MapDispatchToProps = dispatch => {
    return {
        userslist  : (name, limit) => dispatch(GetUsers(name, limit)),
        saveanswer : (postid, text, limit) => dispatch(SaveAnswer(postid, text, limit)),
        getanswers : (postid, limit) => dispatch(GetAnswers(postid, limit))
    }
}
