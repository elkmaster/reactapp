import { SELECT_USER, ADD_USER } from "./types";
import { User } from "./model";

export const selectUser = (id: number) => ({
  type: SELECT_USER,
  payload: id
});

export const addUser = (user: User) => ({
  type: ADD_USER,
  payload: user
});
