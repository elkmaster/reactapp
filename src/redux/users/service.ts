import { Dispatch } from "redux";

import { USERS_LOADING, USERS_SUCCESS } from "./types";
import Users from "../../mocks/Users";

export const fetchUsers = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: USERS_LOADING
    });

    return setTimeout(() => {
      dispatch({
        type: USERS_SUCCESS,
        payload: Users
      });
    }, 1000);
  };
};
