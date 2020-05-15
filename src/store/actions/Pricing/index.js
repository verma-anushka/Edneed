import { pricingActionTypes } from "./actionTypes";
import PricingRequest from "./PricingRequest";

export const GetPricing = (type) => {

    return dispatch => {
        dispatch({
            type: pricingActionTypes.PRICE_LOADING,
            payload: {
                type,
                status: true
            }
        });

        PricingRequest.findPricing(type).then(pricing => {
                return dispatch({
                type: pricingActionTypes.PRICE_LOADED,
                payload: {
                    type,
                    data: pricing.data.data,
                }
            })
        }).catch(error => {
            console.log(`Get Pricing Error!`);
            console.log(error.response);
        }) 
    }
    
}

