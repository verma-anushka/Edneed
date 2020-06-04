import { reportActionTypes } from "./actionTypes";
import reportRequest from "./reportRequest";

export const Report = (kind, user_id, ref_id) => {
    
    return dispatch => {
        dispatch ({
            type:    reportActionTypes.REPORT_STATUS_LOADING,
            payload: { status: true }
        })

        reportRequest
            .report(kind, user_id, ref_id)
            .then(reportresponse => {
                console.log(reportresponse);
                return dispatch({
                    type: reportActionTypes.REPORT_STATUS_LOADED,
                    payload: {
                        success: `${reportresponse.data.kind} has been successfully reported!`
                    }
                })
            })
            .catch(error => {
                // console.log(error);
                return dispatch({
                    type: reportActionTypes.REPORT_STATUS_ERRORS,
                    payload: {
                        error: `Oops! Some error occurred. Please try again!`
                    }
                })
            })
    }
}


export const Unreport = (kind, user_id, ref_id) => {

    return dispatch => {
        dispatch ({
            type:    reportActionTypes.REPORT_STATUS_LOADING,
            payload: { status: true }
        })

        reportRequest
            .unreport(kind, user_id, ref_id)
            .then(unreported => {
                // console.log(unreported);
                return dispatch({
                    type: reportActionTypes.REPORT_STATUS_LOADED,
                    payload: {
                        success: `${unreported.data.kind} has been successfully un-reported!`
                    }
                })
            })
            .catch(error => {
                // console.log(error);
                return dispatch({
                    type: reportActionTypes.REPORT_STATUS_ERRORS,
                    payload: {
                        error: `Oops! Some error occurred. Please try again!`
                    }
                })
            })
    }   
}

