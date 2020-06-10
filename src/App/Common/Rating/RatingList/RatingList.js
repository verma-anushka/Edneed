import React, { Component } from "react";
import { connect } from "react-redux";

import { Button, Spinner } from "react-bootstrap";
import { string, oneOf } from "prop-types";


import RatingCard from "./RatingCard";
import { MapStateToProps, MapDispatchToProps } from "../RatingMapDispatch";

class RatingList extends Component {

    componentDidMount() {
        const { kind, ref_id, limit } = this.props;
        this.props.getRating(kind, ref_id, limit);   
    }

    LoadMore = skip => {
        const { kind, ref_id, limit } = this.props;
        this.props.getMoreRating(kind, ref_id, limit, skip);
    }


    render() {

        const ratings = this.props.ratingstate;
        return (
            <React.Fragment>
                {
                    ratings.loading ? 
                        <div className="text-center">
                            <Spinner animation="border" size="sm" variant="success" className="text-center" />
                        </div>
                        :
                        <>
                        {
                            ratings.data.length ?
                            <>
                                {ratings.data.map(( ratingItem, ratingIndex ) =>  
                                    <RatingCard 
                                        key={ratingIndex}
                                        username={ratingItem.user_fullName}
                                        userphoto={ratingItem.user_photo}
                                        rate={ratingItem.rate}
                                    />
                                )}
                            </>
                            :
                            <div className="text-center p-3">No ratings yet!!</div>
                        }
                        </>
                }
                {
                    ratings.loadingmore ?
                        <div className="text-center">
                            <Spinner animation="border" size="sm" variant="success" className="text-center" />
                        </div>
                        :
                        ratings.more && 
                            <div className="text-center">
                                <Button variant="outline-success" onClick={()=>this.LoadMore(ratings.skip)} >Load More</Button>                    
                            </div>
                }

            </React.Fragment>
        )
    }

}

RatingList.propTypes = {
    
    kind    : oneOf(['post', 'course', 'fs']),
    ref_id  : string.isRequired

}


export default connect(MapStateToProps, MapDispatchToProps)( RatingList );

