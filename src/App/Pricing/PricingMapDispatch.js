import { GetPricing } from "../../store/actions/Pricing";

export const MapStateToProps = state => {
    return {
        pricing: state.pricing
    }
};

export const MapDispatchToProps = dispatch => {

    return {
        getPricing: (type) => dispatch(GetPricing(type))
    }
}

 