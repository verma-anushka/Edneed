import { reportActionTypes } from "../actions/report/actionTypes";

const REPORT_STATUS_STATE = {
    loading      : false,
    reportstatus : false,
    modalshow    : false,
    message      : ""
}

export default (
        state = REPORT_STATUS_STATE, 
        { type, payload }
    ) => {
    switch (type) {
        
        case reportActionTypes.REPORT_STATUS_LOADING:
            return({
                ...state,
                loading: payload.status,
                modalshow   : false

            })

        case reportActionTypes.REPORT_STATUS_LOADED:
            return({
                ...state,
                loading     : false,
                reportstatus: payload.reportstatus,
                modalshow   : true,
                message     : payload.success

            })

        case reportActionTypes.REPORT_STATUS_ERRORS:
            return({
                ...state,
                loading     : false,
                reportstatus: payload.reportstatus,
                modalshow   : true,
                message     : payload.error

            })

        default:
            return state;
    }
}

