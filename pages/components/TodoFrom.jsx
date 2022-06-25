import React, { useContext, useState } from "react";
import { todoContext } from "../_app";

export const TodoFrom = () => {
  const [todoText, setTodoText] = useState("");
  const { setTodos } = useContext(todoContext);
  return (
    <div>
      <input
        type="text"
        value={todoText}
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setTodos((prevTodos) => {
            return [
              ...prevTodos,
              { id: prevTodos.length + 1, text: todoText, isDone: false },
            ];
          });
        }}
      >
        追加
      </button>
    </div>
  );
};
