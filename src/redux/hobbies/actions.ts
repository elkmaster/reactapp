import { ADD_HOBBY, DELETE_HOBBY } from "./types";
import { Hobby } from "./model";

export const addHobby = (hobby: Hobby) => ({
  type: ADD_HOBBY,
  payload: hobby
});

export const deleteHobby = (id: number) => ({
  type: DELETE_HOBBY,
  payload: id
});
