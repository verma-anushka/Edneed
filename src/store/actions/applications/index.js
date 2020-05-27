import ApplicationsRequest from "./applicationsRequest";
import { ApplicationsActionTypes } from "./actionTypes";

export const GetApplications = (type, kind, id, limit) => {

return dispatch => {

    dispatch({
        type:    ApplicationsActionTypes.APPLICATIONS_LOADING,
        payload: { type, kind, status: true }

    })

    if(type === "page") {
        ApplicationsRequest
            .getPageApplications(kind, id, limit)
            .then(pageapplications => {
                return dispatch ({
                    type:    ApplicationsActionTypes.APPLICATIONS_LOADED,
                    payload: {
                        type,
                        kind,
                        data: pageapplications.data.data,
                        limit: pageapplications.data.limit,
                        skip: pageapplications.data.skip,
                        total: pageapplications.data.total
                    }
                })
            })
            .catch(err => {
                return dispatch({
                    type:    ApplicationsActionTypes.APPLICATIONS_ERROR,
                    payload: {
                        type,
                        kind,
                        error: err.response
                    }
                })
            })
    } else {
        ApplicationsRequest
            .getUserApplications(kind, id, limit)
            .then(userapplications => {
                return dispatch ({
                    type:    ApplicationsActionTypes.APPLICATIONS_LOADED,
                    payload: {
                        type,
                        kind,
                        data: userapplications.data.data,
                        limit: userapplications.data.limit,
                        skip: userapplications.data.skip,
                        total: userapplications.data.total
                    }
                })
            })
            .catch(err => {
                return dispatch({
                    type:    ApplicationsActionTypes.APPLICATIONS_ERROR,
                    payload: {
                        type,
                        kind,
                        error: err.response
                    }
                })
            })
    }
}

}


export const GetMoreApplications = (type, kind, id, limit, skip) => {

    return dispatch => {

        dispatch({
            type:    ApplicationsActionTypes.APPLICATIONS_LOADING_MORE,
            payload: { type, kind, status: true }
        })

        if(type === "page") {

            ApplicationsRequest
                .getPageApplications(kind, id, limit, skip)
                .then(moreapplications => {
                    return dispatch({
                        type:    ApplicationsActionTypes.APPLICATIONS_MORE_LOADED,
                        payload: {
                            type,
                            kind,
                            data: moreapplications.data.data,
                            limit: moreapplications.data.limit,
                            skip: moreapplications.data.skip,
                            total: moreapplications.data.total
                        }
                    })
                    
                })
                .catch(err => {
                    return dispatch({
                        type,
                        kind,
                        error: err.response
                    })
                    
                })
        } else {
            ApplicationsRequest
                .getUserApplications(kind, id, limit, skip)
                .then(moreapplications => {
                    return dispatch({
                        type:    ApplicationsActionTypes.APPLICATIONS_MORE_LOADED,
                        payload: {
                            type,
                            kind,
                            data: moreapplications.data.data,
                            limit: moreapplications.data.limit,
                            skip: moreapplications.data.skip,
                            total: moreapplications.data.total
                        }
                    })
                    
                })
                .catch(err => {
                    return dispatch({
                        type,
                        kind,
                        error: err.response
                    })
                    
                })
        }
    }
}

