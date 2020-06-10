import { GetRating, GetMoreRating, SetRating } from "../../../store/actions/rating";

export const MapStateToProps = state => {
    return {
        ratingstate: state.rating
    }
};

export const MapDispatchToProps = dispatch => {

    return {
        getRating     : (kind, ref_id, limit) => dispatch(GetRating(kind, ref_id, limit)),
        getMoreRating : (kind, ref_id, limit, skip) => dispatch(GetMoreRating(kind, ref_id, limit, skip)),
        setRating     : (kind, rate, user_id, ref_id) => dispatch(SetRating(kind, rate, user_id, ref_id))
    }
}
