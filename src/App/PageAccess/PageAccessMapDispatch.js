import { GetRoles, GrantAccess } from "../../store/actions/pageAccess";

export const MapStateToProps = state => {
    return {
        pageaccess: state.pageaccess
    }
};

export const MapDispatchToProps = dispatch => {
    return {
        getPageRoles    : (limit) => dispatch(GetRoles(limit)),
        grantAccess : (newaccessrequest) => dispatch(GrantAccess(newaccessrequest))
    }
}
