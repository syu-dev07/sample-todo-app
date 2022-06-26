import React, { useContext } from "react";
import { todoContext } from "../pages/_app";
import { Todo } from "./Todo";
import styles from "./TodoList.module.css";

export const TodoList = () => {
  const { todos } = useContext(todoContext);
  console.log(todos);
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        <h1>未完了</h1>
        <ul>
          {todos
            .filter((todo) => {
              if (!todo.isDone) {
                return todo;
              }
            })
            .map((todo) => {
              return <Todo key={todo.id} todo={todo} />;
            })}
        </ul>
      </div>
      <div className={styles.board}>
        <h1>完了</h1>
        <ul>
          {todos
            .filter((todo) => {
              if (todo.isDone) {
                return todo;
              }
            })
            .map((todo) => {
              return <Todo key={todo.id} todo={todo} />;
            })}
        </ul>
      </div>
    </div>
  );
};
