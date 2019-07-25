import React from "react";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import styles from "./AddHobby.module.scss";
import Select, { SelectOption } from "../../../components/Select/Select";
import { HobbyLevel, Hobby } from "../../../redux/hobbies/model";
import { connect } from "react-redux";
import { ReduxState } from "../../../redux/model";
import { addHobby } from "../../../redux/hobbies/actions";

interface Props {
  addHobby: (user: Hobby) => void;
}

function Form({ addHobby }: Props) {
  /*convert ts enum to SelectOptions array, 
  slightly tricky but gives us an oportunity to 
  add options in future just with changing model*/
  const opts: SelectOption[] = Object.keys(HobbyLevel)
    .filter(e => parseInt(e, 10) >= 0)
    .map(e => {
      return { value: e, label: HobbyLevel[parseInt(e, 10)] };
    });

  const [level, setLevel] = React.useState(HobbyLevel.Low.toString());
  const [name, setName] = React.useState("");
  const [year, setYear] = React.useState("");

  const cleanForm = () => {
    setName("");
    setYear("");
    setLevel(HobbyLevel.Low.toString());
  };

  const handleAdd = () => {
    const hobby = {
      id: +new Date(),
      name,
      level: parseInt(level, 10),
      year: parseInt(year, 10)
    };
    addHobby(hobby);
    cleanForm();
  };

  return (
    <div className={styles.headerRow}>
      <Select options={opts} value={level} onChange={setLevel} />
      <Input placeholder="Hobby name" value={name} onChange={setName} />
      <Input placeholder="Year" value={year} onChange={setYear} type="number" />
      <Button label="Add" onPress={handleAdd} />
    </div>
  );
}

const mapStateToProps = (state: ReduxState) => ({});
const mapDispatchToProps = { addHobby };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
