import React, { useContext } from "react";
import { todoContext } from "../pages/_app";
import { Todo } from "./Todo";

export const TodoList = () => {
  const { todos } = useContext(todoContext);
  console.log(todos);
  return (
    <ul>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};
