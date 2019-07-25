import React from "react";
import styles from "./Input.module.scss";

interface Props {
  value?: string;
  onChange?: any;
  placeholder?: string;
  type?: string;
}
function Input({ onChange, placeholder, value = "", type = "text" }: Props) {
  return (
    <input
      value={value}
      className={styles.Input}
      placeholder={placeholder}
      type={type}
      onChange={e => {
        onChange && onChange(e.target.value);
      }}
    />
  );
}

export default Input;
