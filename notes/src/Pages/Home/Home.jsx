import React, { useState } from "react";
import Modal from "../../Components/Modal/Modal";
import styles from "./home.module.css";
import GroupLabel from "../../Components/GroupLabel/GroupLabel";
import Image from "../../assets/img.png";
import ChatBox from "../../Components/ChatBox/ChatBox";
function Home() {
  const [showModal, setShowModal] = useState(false);
  const [def, setDef] = useState(true);
  const [newGroups, setNewGroups] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("groups")) || [];
    return storedData;
  });
  const [gid, setgid] = useState(() => {
    const storedId = JSON.parse(localStorage.getItem("id")) || 101;
    return storedId;
  });
  const updateGid = () => {
    const existingId = JSON.parse(localStorage.getItem("id")) || 101;
    const updatedId = existingId + 1;
    setgid(updatedId);
    localStorage.setItem("id", JSON.stringify(updatedId));
  };
  const handleModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  //
  const updategrps = () => {
    const existingGroups = JSON.parse(localStorage.getItem("groups")) || [];
    setNewGroups(existingGroups);
  };
  // handle newGroups
  const handleNewGroups = (obj) => {
    const existingGroups = JSON.parse(localStorage.getItem("groups")) || [];
    const updatedGroups = [...existingGroups, obj];

    setNewGroups(updatedGroups);
    localStorage.setItem("groups", JSON.stringify(updatedGroups));
  };
  // show chat
  const showChat = (obj) => {
    setDef(false);
    // console.log(obj.Name);
    const temp = [...newGroups];
    temp.forEach((el) => {
      if (el.id !== obj.id) {
        el.isActive = false;
      }
    });
    const grp = temp.find((item) => item.id === obj.id);
    if (grp != null) {
      grp.isActive = true;
      setNewGroups(temp);
    }
  };
  //close chat mobile
  const updateDef = () => {
    setDef(true);
  };
  ///
  window.onclick = function (e) {
    if (e.target.className === "modal_modalContainer__jmnz0") {
      setShowModal(false);
    }
  };
  const width = window.innerWidth;
  if (width > 600) {
    return (
      <>
        <div>
          {" "}
          {showModal ? (
            <Modal
              id={gid}
              updateGid={updateGid}
              closeModal={closeModal}
              handleNewGroups={handleNewGroups}
            />
          ) : (
            ""
          )}
        </div>
        <div className={styles.container}>
          <div className={styles.grpNameContainer}>
            <div className={styles.banner}>
              <div className={styles.logo}>Pocket Notes</div>
              <div className={styles.createGroupbtn}>
                <button onClick={handleModal}>
                  <span
                    style={{
                      fontSize: "1.3vw",
                    }}
                  >
                    +
                  </span>{" "}
                  &nbsp; Create Notes group
                </button>
              </div>
            </div>
            <div className={styles.groups}>
              {newGroups.map((obj, i) => (
                <div>
                  <GroupLabel
                    onClick={() => showChat(obj)}
                    key={i}
                    name={obj.Name}
                    color={obj.Color}
                    active={obj.isActive}
                  />
                </div>
                //
              ))}
            </div>
          </div>
          <div className={styles.chatContainer}>
            {width > 600 && def === true ? (
              <div>
                <div className={styles.imgContainer}>
                  <img src={Image} alt="notesimage" />
                </div>
                <div
                  style={{
                    position: "relative",
                    top: "150px",
                    left: "400px",
                    // top: "21%",
                    // left: "10%",
                    fontFamily: "Roboto",
                    fontSize: "2vw",
                    // border: "1px solid red",
                    width: "fit-content",
                  }}
                >
                  Pocket Notes
                </div>
                <div
                  style={{
                    position: "relative",
                    top: "170px",
                    left: "300px",
                    fontFamily: "Roboto",
                    fontSize: "1vw",
                    width: "fit-content",
                  }}
                >
                  Send and receive messages without keeping your phone online.
                  <br /> Use Pocket Notes on up to 4 linked devices and 1 mobile
                  phone
                </div>
                <div
                  style={{
                    display: "flex",
                    position: "relative",
                    top: "280px",
                    left: "400px",
                    width: "fit-content",
                  }}
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15 "
                      height="15"
                      viewBox="0 0 17 21"
                      fill="none"
                    >
                      <path
                        d="M2.125 21C1.54063 21 1.04019 20.804 0.623689 20.412C0.207189 20.02 -0.000706529 19.5493 1.80391e-06 19V9C1.80391e-06 8.45 0.208252 7.979 0.624752 7.587C1.04125 7.195 1.54134 6.99933 2.125 7H3.1875V5C3.1875 3.61667 3.70565 2.43733 4.74194 1.462C5.77823 0.486667 7.03092 -0.000665984 8.5 6.8306e-07C9.96979 6.8306e-07 11.2228 0.487667 12.2591 1.463C13.2954 2.43833 13.8132 3.61733 13.8125 5V7H14.875C15.4594 7 15.9598 7.196 16.3763 7.588C16.7928 7.98 17.0007 8.45067 17 9V19C17 19.55 16.7918 20.021 16.3753 20.413C15.9588 20.805 15.4587 21.0007 14.875 21H2.125ZM8.5 16C9.08438 16 9.58482 15.804 10.0013 15.412C10.4178 15.02 10.6257 14.5493 10.625 14C10.625 13.45 10.4168 12.979 10.0003 12.587C9.58375 12.195 9.08367 11.9993 8.5 12C7.91563 12 7.41519 12.196 6.99869 12.588C6.58219 12.98 6.37429 13.4507 6.375 14C6.375 14.55 6.58325 15.021 6.99975 15.413C7.41625 15.805 7.91634 16.0007 8.5 16ZM5.3125 7H11.6875V5C11.6875 4.16667 11.3776 3.45833 10.7578 2.875C10.138 2.29167 9.38542 2 8.5 2C7.61459 2 6.86198 2.29167 6.24219 2.875C5.6224 3.45833 5.3125 4.16667 5.3125 5V7Z"
                        fill="#292929"
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "1vw",
                      marginLeft: "8px",
                    }}
                  >
                    end-to-end encrypted
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {def === false
              ? newGroups
                  .filter((obj) => obj.isActive)
                  .map((item, i) => (
                    <ChatBox
                      color={item.Color}
                      updategrps={updategrps}
                      newGroups={newGroups}
                      key={i}
                      id={item.id}
                      name={item.Name}
                    />
                  ))
              : ""}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          {showModal ? (
            <Modal
              id={gid}
              updateGid={updateGid}
              closeModal={closeModal}
              handleNewGroups={handleNewGroups}
            />
          ) : (
            ""
          )}
        </div>
        <div className={styles.container}>
          {def === true ? (
            <div className={styles.grpNameContainer}>
              <div className={styles.banner}>
                <div className={styles.logo}>Pocket Notes</div>
                <div className={styles.createGroupbtn}>
                  <button onClick={handleModal}>
                    <span
                      style={{
                        fontSize: "6.5vw",
                      }}
                    >
                      +
                    </span>{" "}
                    &nbsp; Create Notes group
                  </button>
                </div>
              </div>
              <div className={styles.groups}>
                {newGroups.map((obj, i) => (
                  <GroupLabel
                    onClick={() => showChat(obj)}
                    key={i}
                    name={obj.Name}
                    color={obj.Color}
                  />
                ))}
              </div>
            </div>
          ) : (
            ""
          )}
          {def === false
            ? newGroups
                .filter((obj) => obj.isActive)
                .map((item, i) => (
                  <ChatBox
                    updateDef={updateDef}
                    color={item.Color}
                    updategrps={updategrps}
                    newGroups={newGroups}
                    key={i}
                    id={item.id}
                    name={item.Name}
                  />
                ))
            : ""}
        </div>
      </>
    );
  }
}

export default Home;
