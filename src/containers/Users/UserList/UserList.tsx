import React from "react";
import styles from "./UserList.module.scss";
import { connect } from "react-redux";
import { User } from "../../../redux/users/model";
import { ReduxState } from "../../../redux/model";
import { selectUser } from "../../../redux/users/actions";
interface OwnProps {
  data: User[];
  selected?: number;
}

interface DispatchProps {
  selectUser: (id: number) => void;
}
type Props = OwnProps & DispatchProps;

export function List({ data, selectUser, selected }: Props) {
  return (
    <div className={styles.UsersList}>
      {data.map(user => (
        <div
          className={`${styles.UsersItem} ${selected &&
            selected === user.id &&
            styles.active}`}
          key={user.id}
          onClick={() => selectUser(user.id)}
        >
          {user.name}
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state: ReduxState) => ({});
const mapDispatchToProps = { selectUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
