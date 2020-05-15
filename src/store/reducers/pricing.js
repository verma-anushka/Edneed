import { pricingActionTypes } from "../actions/Pricing/actionTypes";

const PRICING_STATES = {
    
    school: {
        loading: false,
        data: [],
    },
    tutorcoaching: {
        loading: false,
        data: [],
    }
}

export default (state=PRICING_STATES, {type, payload}) => {
    
    switch (type) {
        case pricingActionTypes.PRICE_LOADING:
            return({
                ...state,
                [payload.type]: {
                    ...state[payload.type],
                    loading: payload.status
                }
            })

        case pricingActionTypes.PRICE_LOADED:
            return({
                ...state,
                [payload.type]:{
                    ...state[payload.type],
                    loading: false,
                    data: payload.data
                }
            })
            
        default:
            return state;
    }
}

