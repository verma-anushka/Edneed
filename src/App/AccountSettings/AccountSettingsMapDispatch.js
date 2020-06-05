import { UpdateUserProfile, ChangePassword } from "../../store/actions/accountSettings";

export const MapStateToProps = state => {
    return {
        accountsettings: state.accountSettings
    }
}

export const MapDispatchToProps = dispatch => {

    return {
        updateUserProfile : (id, userdetails) => dispatch(UpdateUserProfile(id, userdetails)),
        changePassword    : (id, email, oldpassword, newpassword) => dispatch(ChangePassword(id, email, oldpassword, newpassword))
    }
}

