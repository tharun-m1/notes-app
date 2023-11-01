import React, { useState } from "react";
import styles from "./modal.module.css";
function Modal(props) {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [clickedBtn, setClickedBtn] = useState(null);

  // color
  const handleColor = (e, buttonId) => {
    setColor(e.target.value);
    setClickedBtn(buttonId);
  };
  // to add border when clicked
  const getButtonStyle = (buttonId) => {
    if (clickedBtn === buttonId) {
      return true;
    }
    return false;
  };
  // name
  const saveName = (e) => {
    setName(e.target.value);
  };
  //create group
  const createGroup = () => {
    if (name === "" || color === "") {
      alert("Select Name && Color");
      return;
    }
    props.handleNewGroups({
      id: props.id,
      Name: name,
      Color: color,
      Chat: [],
      isActive: false,
    });

    setName("");
    setColor("");
    props.updateGid();

    props.closeModal();
  };
  return (
    <>
      <div className={styles.modalContainer}>
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
                onClick={(e) => handleColor(e, 1)}
                value={"#B38BFA"}
                style={{
                  backgroundColor: "#B38BFA",
                  border: getButtonStyle(1) ? "2px solid black" : "none",
                }}
              ></button>
              <button
                onClick={(e) => handleColor(e, 2)}
                value={"#FF79F2"}
                style={{
                  backgroundColor: "#FF79F2",
                  border: getButtonStyle(2) ? "2px solid black" : "none",
                }}
              ></button>
              <button
                onClick={(e) => handleColor(e, 3)}
                value={"#43E6FC"}
                style={{
                  backgroundColor: "#43E6FC",
                  border: getButtonStyle(3) ? "2px solid black" : "none",
                }}
              ></button>
              <button
                onClick={(e) => handleColor(e, 4)}
                value={"#F19576"}
                style={{
                  backgroundColor: "#F19576",
                  border: getButtonStyle(4) ? "2px solid black" : "none",
                }}
              ></button>
              <button
                onClick={(e) => handleColor(e, 5)}
                value={"#0047FF"}
                style={{
                  backgroundColor: "#0047FF",
                  border: getButtonStyle(5) ? "2px solid black" : "none",
                }}
              ></button>
              <button
                onClick={(e) => handleColor(e, 6)}
                value={"#6691FF"}
                style={{
                  backgroundColor: "#6691FF",
                  border: getButtonStyle(6) ? "2px solid black" : "none",
                }}
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
