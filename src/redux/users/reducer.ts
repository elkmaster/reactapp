import { UsersRedux } from "./model";

import { USERS_LOADING, USERS_SUCCESS, SELECT_USER, ADD_USER } from "./types";

const initialState: UsersRedux = {
  data: [],
  loading: true
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case USERS_LOADING:
      return {
        ...state,
        loading: true
      };

    case USERS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false
      };

    case ADD_USER:
      return {
        ...state,
        data: [...state.data, action.payload]
      };

    case SELECT_USER:
      return {
        ...state,
        selected: action.payload
      };
    default:
      return state;
  }
};
