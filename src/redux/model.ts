import { UsersRedux } from "./users/model";
import { HobbiesRedux } from "./hobbies/model";

export interface ReduxState {
  users: UsersRedux;
  hobbies: HobbiesRedux;
}
