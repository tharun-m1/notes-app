import React, { useState } from "react";
import styles from "./modal.module.css";
function Modal(props) {
  // const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  // const [valid, setValid] = useState(true);
  // color
  const handleColor = (e) => {
    setColor(e.target.value);
  };
  // name
  const saveName = (e) => {
    setName(e.target.value);
  };
  //create group
  const createGroup = () => {
    if (name === "" || color === "") {
      alert("select name && color");
      return;
    }
    props.handleNewGroups({ Name: name, Color: color });
    setName("");
    setColor("");
    props.closeModal();
  };
  return (
    <>
      <div
        // style={{ display: showModal ? "block" : "none" }}
        className={styles.modalContainer}
      >
        <div className={styles.modal}>
          <div className={styles.caption}>Create New Notes group</div>
          <div className={styles.name}>
            <span>Group Name</span>
            <input
              onChange={saveName}
              placeholder="Enter your group name...."
              type="text"
              name="grpName"
            />
          </div>
          <div className={styles.colours}>
            <span>Choose Colour</span>
            <div>
              <button
                onClick={handleColor}
                value={"#B38BFA"}
                style={{ backgroundColor: "#B38BFA" }}
              ></button>
              <button
                onClick={handleColor}
                value={"#FF79F2"}
                style={{ backgroundColor: "#FF79F2" }}
              ></button>
              <button
                onClick={handleColor}
                value={"#43E6FC"}
                style={{ backgroundColor: "#43E6FC" }}
              ></button>
              <button
                onClick={handleColor}
                value={"#F19576"}
                style={{ backgroundColor: "#F19576" }}
              ></button>
              <button
                onClick={handleColor}
                value={"#0047FF"}
                style={{ backgroundColor: "#0047FF" }}
              ></button>
              <button
                onClick={handleColor}
                value={"#6691FF"}
                style={{ backgroundColor: "#6691FF" }}
              ></button>
            </div>
          </div>
          <div className={styles.createContainer}>
            <button onClick={createGroup}>Create</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
