import { UpdateUserDetails, ChangePassword } from "../../store/actions/accountSettings";

export const MapStateToProps = state => {
    return {
        accountsettings: state.accountSettings
    }
}

export const MapDispatchToProps = dispatch => {

    return {
        updateUserDetails : (id, newdetails) => dispatch(UpdateUserDetails(id, newdetails)),
        changePassword    : (id, email, oldpassword, newpassword) => dispatch(ChangePassword(id, email, oldpassword, newpassword))
    }
}

