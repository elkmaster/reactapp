import React from "react";
import styles from "./Select.module.scss";

export type SelectOption = {
  value: string;
  label: string;
};

interface Props {
  options: SelectOption[];
  value?: string;
  onChange?: any;
  placeholder?: string;
}
function Select({ onChange, value = "", options }: Props) {
  return (
    <select
      className={styles.Select}
      value={value}
      onChange={e => {
        onChange && onChange(e.target.value);
      }}
    >
      {options.map(e => (
        <option key={e.value} value={e.value}>
          {e.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
