import React, { useContext } from "react";
import { todoContext } from "../pages/_app";
import styles from "./Todo.module.css";

export const Todo = ({ todo }) => {
  const { setTodos } = useContext(todoContext);
  const handleTodo = (id, isDone) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !isDone };
        } else {
          return todo;
        }
      });
    });
  };
  return (
    <div className={styles.todo}>
      <li>{todo.text}</li>
      <button
        className={todo.isDone ? styles.notCompButton : styles.compButton}
        onClick={() => handleTodo(todo.id, todo.isDone)}
      >
        {!todo.isDone ? "完了" : "戻す"}
      </button>
    </div>
  );
};
