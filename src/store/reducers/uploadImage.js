import {
  IMAGE_UPLOAD,
  LOADING
} from "../actions/UploadImage/types";

const initialState = {
  image: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case IMAGE_UPLOAD: 
      return {
        ...state,
         loading: false,
        image: action.payload,
      };
    default:
      return state;
  }
}
