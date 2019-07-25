import React from "react";
import Form from "./AddHobby/AddHobby";
import styles from "./Hobbies.module.scss";
import { ReduxState } from "../../redux/model";
import { fetchHobbies } from "../../redux/hobbies/service";
import { connect } from "react-redux";
import { Hobby } from "../../redux/hobbies/model";
import HobbyList from "./HobbyList/HobbyList";

interface StateProps {
  data: Hobby[];
  loading: boolean;
  selected?: number;
}

interface DispatchProps {
  fetchHobbies: () => void;
}

type Props = StateProps & DispatchProps;

function Hobbies({ selected, fetchHobbies, data, loading }: Props) {
  React.useEffect(() => {
    if (selected) {
      fetchHobbies();
    }
  }, [selected]);

  const renderList = () =>
    loading ? (
      <div className={styles.Loading}>Loading...</div>
    ) : (
      <HobbyList data={data} />
    );

  return (
    <div>
      <Form />
      {selected ? (
        renderList()
      ) : (
        <div className={styles.Loading}>No User Selected</div>
      )}
    </div>
  );
}

const mapStateToProps = (state: ReduxState) => {
  const { selected } = state.users;
  const { data, loading } = state.hobbies;
  return { selected, data, loading };
};

const mapDispatchToProps = { fetchHobbies };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hobbies);
