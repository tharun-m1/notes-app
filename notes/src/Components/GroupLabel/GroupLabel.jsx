import React from "react";
import styles from "./grouplabel.module.css";
function GroupLabel(props) {
  const name = props.name;
  const label = name[0] + name[name.length - 1];
  return (
    <>
      <div
        style={{
          backgroundColor: props.active ? "rgba(247, 236, 220, 1)" : "",
        }}
        onClick={props.onClick}
        className={styles.container}
      >
        <div style={{ backgroundColor: props.color }} className={styles.icon}>
          {label.toUpperCase()}
        </div>
        <div className={styles.grpName}>{props.name}</div>
      </div>
    </>
  );
}

export default GroupLabel;
