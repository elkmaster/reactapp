import { combineReducers } from "redux";
import users from "./users/reducer";
import hobbies from "./hobbies/reducer";
export default combineReducers({ users, hobbies });
