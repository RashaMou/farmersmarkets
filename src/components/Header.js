import React from "react";
import logo from "../assets/images/logo.png";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={logo} alt="Logo" />
    </div>
  );
};
