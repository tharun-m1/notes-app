import React from "react";
import styles from "./message.module.css";
function Message(props) {
  const msg = props.chat.msg;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.when}>
          <div className={styles.date}>{props.chat.Date}</div>
          <div className={styles.time}>{props.chat.Time}</div>
        </div>
        <div className={styles.text}>{msg}</div>
      </div>
    </>
  );
}

export default Message;
