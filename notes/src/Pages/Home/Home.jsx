import React, { useState } from "react";
import Modal from "../../Components/Modal/Modal";
import styles from "./home.module.css";
import GroupLabel from "../../Components/GroupLabel/GroupLabel";
function Home() {
  const [showModal, setShowModal] = useState(false);
  const [newGroups, setNewGroups] = useState([]);
  const handleModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  // handle newGroups
  const handleNewGroups = (obj) => {
    setNewGroups([...newGroups, obj]);
  };
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
            <Modal closeModal={closeModal} handleNewGroups={handleNewGroups} />
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
              {newGroups.map((obj) => (
                <GroupLabel name={obj.Name} color={obj.Color} />
              ))}
            </div>
          </div>
          <div className={styles.chatContainer}></div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          {showModal ? (
            <Modal closeModal={closeModal} handleNewGroups={handleNewGroups} />
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
              {newGroups.map((obj) => (
                <GroupLabel name={obj.Name} color={obj.Color} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
