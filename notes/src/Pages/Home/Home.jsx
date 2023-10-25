import React, { useState } from "react";
import Modal from "../../Components/Modal/Modal";
import styles from "./home.module.css";
function Home() {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(true);
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
        <div> {showModal ? <Modal /> : ""}</div>
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
            <div className={styles.groups}></div>
          </div>
          <div className={styles.chatContainer}></div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>{showModal ? <Modal /> : ""}</div>
        <div className={styles.container}>
          <div className={styles.grpNameContainer}>100</div>
        </div>
      </>
    );
  }
}

export default Home;
