import React, { useContext } from "react";
import { todoContext } from "../../pages/_app";
import { Select } from "./Select";

export const Todo = ({ todo }) => {
  return (
    <div className="flex justify-between items-center my-3 min-w-full">
      <li className="list-none border border-solid w-full border-gray-300 shadow-md rounded-md py-2 pl-1 mr-2">
        {todo.text}
      </li>
      <Select thisTodo={todo} />
    </div>
  );
};
