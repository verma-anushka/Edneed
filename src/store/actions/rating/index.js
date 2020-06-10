import { ratingActionTypes } from "./actionTypes";
import RatingRequest from "./ratingRequest";

export const GetRating = (kind, ref_id, limit) => {

    return dispatch => {
        dispatch({
            type: ratingActionTypes.RATING_LOADING,
            payload: {
                status: true
            }
        });

        RatingRequest
            .getRating(kind, ref_id, limit)
            .then(ratings => {
                return dispatch({
                    type: ratingActionTypes.RATING_LOADED,
                    payload: {
                        data  : ratings.data.data,
                        limit : ratings.data.limit,
                        skip  : ratings.data.skip,
                        total : ratings.data.total
                    }
                })
            })
            .catch(error => {
                 return dispatch({
                    type: ratingActionTypes.RATING_ERRORS,
                    payload: {
                        error: `Oops! An error occurred. Please try again!`
                    }
                })
            }) 
    }
    
}


export const GetMoreRating = (kind, ref_id, limit, skip) => {

    return dispatch => {
        dispatch({
            type: ratingActionTypes.RATING_LOADING_MORE,
            payload: {
                status: true
            }
        });

        RatingRequest
            .getRating(kind, ref_id, limit, skip)
            .then(moreratings => {
                return dispatch({
                    type: ratingActionTypes.RATING_MORE_LOADED,
                    payload: {
                        data  : moreratings.data.data,
                        limit : moreratings.data.limit,
                        skip  : moreratings.data.skip,
                        total : moreratings.data.total
                    }
                })
            })
            .catch(error => {
                 return dispatch({
                    type: ratingActionTypes.RATING_ERRORS,
                    payload: {
                        error: `Oops! An error occurred. Please try again!`
                    }
                })
            }) 
    }
    
}


export const SetRating = (kind, rate, user_id, ref_id) => {

    return dispatch => {
        dispatch({
            type: ratingActionTypes.RATING_LOADING,
            payload: {
                status: true
            }
        });

        RatingRequest
            .setRating(kind, rate, user_id, ref_id)
            .then(ratingresponse => {
                RatingRequest
                    .getRating(kind, ref_id)
                    .then(ratings => {
                        return dispatch({
                            type: ratingActionTypes.RATING_LOADED,
                            payload: {
                                data  : ratings.data.data,
                                limit : ratings.data.limit,
                                skip  : ratings.data.skip,
                                total : ratings.data.total
                            }
                        })
                    })
                    .catch(error => {
                        return dispatch({
                            type: ratingActionTypes.RATING_ERRORS,
                            payload: {
                                error: `Oops! An error occurred. Please try again!`
                            }
                        })
                    }) 
            })
            .catch(error => {
                return dispatch({
                    type: ratingActionTypes.RATING_ERRORS,
                    payload: {
                        error: `Oops! An error occurred. Please try again!`
                    }
                })
            }) 
    }
    
}

