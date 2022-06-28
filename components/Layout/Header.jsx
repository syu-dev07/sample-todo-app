import React, { useContext } from "react";
import { todoContext } from "../../pages/_app";

export const Header = () => {
  const { todos } = useContext(todoContext);
  return (
    <header className="border border-solid border-white border-b-gray-300 shadow-md">
      <h1 className="my-0 py-2 pl-2 text-gray-600">
        Sample Todo App Todo:{todos.length}件
      </h1>
    </header>
  );
};
