import { Dispatch } from "redux";

import { HOBBIES_SUCCESS, HOBBIES_LOADING } from "./types";
import Hobbies from "../../mocks/Hobbies";

export const fetchHobbies = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: HOBBIES_LOADING
    });

    return setTimeout(() => {
      dispatch({
        type: HOBBIES_SUCCESS,
        payload: Hobbies
      });
    }, 1000);
  };
};
