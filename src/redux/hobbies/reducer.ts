import { HobbiesRedux } from "./model";
import {
  HOBBIES_LOADING,
  HOBBIES_SUCCESS,
  ADD_HOBBY,
  DELETE_HOBBY
} from "./types";

const initialState: HobbiesRedux = {
  data: [],
  loading: true
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case HOBBIES_LOADING:
      return {
        ...state,
        loading: true
      };

    case HOBBIES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false
      };

    case ADD_HOBBY:
      return {
        ...state,
        data: [...state.data, action.payload]
      };

    case DELETE_HOBBY:
      return {
        ...state,
        data: state.data.filter(e => e.id !== action.payload)
      };

    default:
      return state;
  }
};
