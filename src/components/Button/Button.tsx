import React from "react";
import styles from "./Button.module.scss";

interface Props {
  label?: string;
  onPress?: any;
  type?: "submit" | "cancel";
}
function Button({ label, onPress, type = "submit" }: Props) {
  return (
    <div
      className={`${styles.Button} ${styles[type]}`}
      onClick={() => {
        onPress && onPress();
      }}
    >
      {label}
    </div>
  );
}

export default Button;
