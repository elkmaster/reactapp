import React from "react";
import styles from "./HobbyList.module.scss";
import { connect } from "react-redux";
import { ReduxState } from "../../../redux/model";
import { selectUser } from "../../../redux/users/actions";
import { deleteHobby } from "../../../redux/hobbies/actions";
import { Hobby, HobbyLevel } from "../../../redux/hobbies/model";
import Button from "../../../components/Button/Button";

interface OwnProps {
  data: Hobby[];
}
interface DispatchProps {
  deleteHobby: (id: number) => void;
}

type Props = OwnProps & DispatchProps;

function List({ data, deleteHobby }: Props) {
  return (
    <div className={styles.HobbyList}>
      {data.map(hobby => (
        <div className={styles.HobbyItem} key={hobby.id}>
          <div>{HobbyLevel[hobby.level]}</div>
          <div>{hobby.name}</div>
          <div>{hobby.year}</div>
          <Button
            label="del"
            type={"cancel"}
            onPress={() => deleteHobby(hobby.id)}
          />
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state: ReduxState) => ({});
const mapDispatchToProps = { selectUser, deleteHobby };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
