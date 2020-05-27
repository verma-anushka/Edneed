import { GetApplications, GetMoreApplications } from "../../store/actions/applications";


export const MapStateToProps = state => {

    return {
        applications: state.applications
    }
}


export const MapDispatchToProps = dispatch => {

    return  {
        getApplications: (type, kind, id, limit) => dispatch(GetApplications(type, kind, id, limit)),
        getMoreApplications: (type, kind, id, limit, skip) => dispatch(GetMoreApplications(type, kind, id, limit, skip))
    }
}

