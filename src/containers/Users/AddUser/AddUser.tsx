import React from "react";
import { connect } from "react-redux";

import styles from "./AddUser.module.scss";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { ReduxState } from "../../../redux/model";
import { addUser } from "../../../redux/users/actions";
import { User } from "../../../redux/users/model";

interface Props {
  addUser: (user: User) => void;
}

function Form({ addUser }: Props) {
  const [name, setName] = React.useState("");
  return (
    <div className={styles.UsersForm}>
      <Input placeholder="User Name" onChange={setName} value={name} />
      <Button
        label="Add"
        onPress={() => {
          addUser({ id: +new Date(), name });
          setName("");
        }}
      />
    </div>
  );
}
const mapStateToProps = (state: ReduxState) => ({});
const mapDispatchToProps = { addUser };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
