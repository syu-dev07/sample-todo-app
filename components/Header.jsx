import React, { useContext } from "react";
import { todoContext } from "../pages/_app";
import styles from "./Header.module.css";

export const Header = () => {
  const { todos } = useContext(todoContext);
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>Sample Todo App Todo:{todos.length}件</h1>
    </header>
  );
};
