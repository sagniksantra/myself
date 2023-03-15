import React from 'react'
import styles from "loader.css";
import loaderImg from "mes-logo2.png";
import ReactDOM from "react-dom";

const Loader = () => {
  return ReactDOM.createPortal(
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <img src={"mes-logo2.png"} alt="Loading..." />
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export default Loader;