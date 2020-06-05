import { Component } from "react";
import { connect } from "react-redux";

import { MapStateToProps, MapDispatchToProps } from "./PricingMapDispatch";

class PricingHoc extends Component {
    
    componentDidMount() {
        this.props.getPricing(this.props.pricingType);
    }

    render() {
        return this.props.render({
            pricing: this.props.pricing[this.props.pricingType]
        })
    }

}

PricingHoc.defaultProps = {
    pricingType: "school"
}

export default connect(MapStateToProps, MapDispatchToProps)( PricingHoc );

