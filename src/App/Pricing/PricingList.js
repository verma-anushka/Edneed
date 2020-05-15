import React, { Component } from "react";
import { Row } from 'react-bootstrap';

// import Loader from "../../Loader";
import PricingHoc from "./PricingHOC";
import PricingCard from "./PricingCard";

class PricingList extends Component {    

    render() {
        return (
            <PricingHoc pricingType={this.props.type} render={({ pricing }) => {

                return <React.Fragment> {
                    pricing.loading ?
                        <div className="text-center p-3">
                            {/* <Loader /> */}
                            Loading...
                        </div>
                        :
                        <Row style={{ margin:"15px" }}>
                            {pricing.data.map((pricingItem, pricingItemIndex) => 
                                <PricingCard
                                    key={pricingItemIndex}
                                    name={pricingItem.planname}
                                    discount={pricingItem.discount}
                                    title={pricingItem.title}
                                    subtitle={pricingItem.subtitle}
                                    features={pricingItem.features}
                                />
                            )};           
                        </Row>
                    }
                </React.Fragment>
                }
            }>
            </PricingHoc>
        )
    }
}

export default PricingList;


