import React, { useContext } from "react";
import { todoContext } from "../../pages/_app";
import { Todo } from "./Todo";

export const TodoList = () => {
  const { todos } = useContext(todoContext);
  console.log(todos);
  return (
    <div>
      <div>
        <h1>未完了</h1>
        <ul className="p-0">
          {todos
            .filter((todo) => {
              if (todo.progress === "pending") {
                return todo;
              }
            })
            .map((todo) => {
              return <Todo key={todo.id} todo={todo} />;
            })}
        </ul>
      </div>
      <div>
        <h1>対応中</h1>
        <ul className="p-0">
          {todos
            .filter((todo) => {
              if (todo.progress === "processing") {
                return todo;
              }
            })
            .map((todo) => {
              return <Todo key={todo.id} todo={todo} />;
            })}
        </ul>
      </div>
      <div>
        <h1>完了</h1>
        <ul className="p-0">
          {todos
            .filter((todo) => {
              if (todo.progress === "complete") {
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
