import { GetUsers, GetRoles, GrantAccess } from "../../store/actions/pageAccess";

export const MapStateToProps = state => {
    // console.log(state);
    return {
        pageaccess: state.pageaccess
    }
};

export const MapDispatchToProps = dispatch => {
    return {
        getUsersList    : (limit) => dispatch(GetUsers(limit)),
        getPageRoles    : (limit) => dispatch(GetRoles(limit)),
        grantAccess : (newaccessrequest) => dispatch(GrantAccess(newaccessrequest))
    }
}
