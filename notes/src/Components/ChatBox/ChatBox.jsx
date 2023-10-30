import React, { useState, useRef, useEffect } from "react";
import styles from "./chatbox.module.css";
import arrow from "../../assets/arrow.png";
import Message from "../Messages/Message";
import back from "../../assets/backArrow.png";
export default function ChatBox(props) {
  const name = props.name;
  const label = name[0] + name[name.length - 1];
  const [groups, setgroups] = useState(props.newGroups);
  const input = useRef("");
  const [newMessage, setNewMessage] = useState("");
  const handleChange = (e) => {
    setNewMessage(e.target.value);
  };
  const messageContainerRef = useRef(null);
  //persist chat in mobile version when back button is clicked
  useEffect(() => {
    const grps = JSON.parse(localStorage.getItem("groups"));
    setgroups(grps);
  }, []);
  //
  //
  useEffect(() => {
    // Scroll to the bottom of the message container when new messages are added
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [groups]);
  //
  const width = window.innerWidth;
  // send new msg
  const sendMessage = () => {
    if (newMessage === "") return;
    // date and time
    const currentDate = new Date();

    const date = currentDate.toLocaleDateString(); // E.g., "10/29/2023"
    const time = currentDate.toLocaleTimeString(); // E.g., "10:15:30 AM"
    //
    const grps = JSON.parse(localStorage.getItem("groups"));
    const selectedgrp = grps.find((item) => item.id === props.id);
    selectedgrp.Chat = [
      ...selectedgrp.Chat,
      { Date: date, Time: time, msg: newMessage },
    ];
    localStorage.setItem("groups", JSON.stringify(grps));
    setNewMessage("");
    setgroups(grps);
    input.current.value = "";
  };
  const closeChat = () => {
    props.updateDef();
    const grps = JSON.parse(localStorage.getItem("groups"));
    setgroups(grps);
  };
  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      e.preventDefault();
      sendMessage();
      return;
    }
  };
  ////
  return (
    <>
      <div className={styles.container}>
        <div className={styles.nameLabel}>
          {width < 600 ? (
            <img
              onClick={closeChat}
              style={{ marginTop: "5%", marginLeft: "5.7%" }}
              width={"20px"}
              height={"20px"}
              src={back}
            />
          ) : (
            ""
          )}
          <div style={{ backgroundColor: props.color }} className={styles.icon}>
            {label.toUpperCase()}
          </div>
          <div className={styles.grpName}>{props.name}</div>
        </div>
        <div ref={messageContainerRef} className={styles.display}>
          {groups
            .find((grp) => grp.id === props.id)
            .Chat.map((chat, i) => (
              <Message key={i} chat={chat} />
            ))}
        </div>
        <div className={styles.editor}>
          <textarea
            onKeyDown={handleKeyDown}
            name="editor"
            ref={input}
            onChange={handleChange}
            rows={10}
            placeholder="Enter your text here..........."
          ></textarea>
          <span className={styles.arrow}>
            <img
              onClick={sendMessage}
              style={{
                width: "3vw",
                height: "fit-content",
                zIndex: "1",
                position: "relative",
                left: "-5%",
                bottom: "5%",
                cursor: "pointer",
              }}
              src={arrow}
              alt={"arrowimage"}
            />
          </span>
        </div>
      </div>
    </>
  );
}
