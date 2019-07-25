import React from "react";
import styles from "./Users.module.scss";
import { connect } from "react-redux";
import Form from "./AddUser/AddUser";
import { ReduxState } from "../../redux/model";
import { User } from "../../redux/users/model";
import { fetchUsers } from "../../redux/users/service";
import { selectUser } from "../../redux/users/actions";
import List from "./UserList/UserList";

interface StateProps {
  data: User[];
  loading: boolean;
  selected?: number;
}

interface DispatchProps {
  fetchUsers: () => void;
}
type Props = StateProps & DispatchProps;

export function Users({ data, loading, fetchUsers, selected }: Props) {
  React.useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <Form />
      <div className={styles.UsersList}>
        {loading ? (
          <div className={styles.Loading}>Loading...</div>
        ) : (
          <List data={data} selected={selected} />
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state: ReduxState) => {
  const { data, loading, selected } = state.users;
  return { data, loading, selected };
};

const mapDispatchToProps = { fetchUsers };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
