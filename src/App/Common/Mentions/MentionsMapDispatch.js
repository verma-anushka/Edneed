import { GetUsers } from "../../../store/actions/mentions";

export const MapStateToProps = state => {
    return{
        usersState: state.users,
    }
};

export const MapDispatchToProps = dispatch => {
    return {
        userslist : (name, limit) => dispatch(GetUsers(name, limit))
    }
}
