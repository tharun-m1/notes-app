import React from "react";
import styles from "./grouplabel.module.css";
function GroupLabel(props) {
  return (
    <>
      <div className={styles.container}>
        <div
          style={{ backgroundColor: props.color }}
          className={styles.icon}
        ></div>
        <div className={styles.grpName}>{props.name}</div>
      </div>
    </>
  );
}

export default GroupLabel;
