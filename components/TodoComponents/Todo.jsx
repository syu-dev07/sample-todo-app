import React, { useContext } from "react";
import { useDrag } from "react-dnd";
import { DnDItems } from "../../DndConfig";
import { todoContext } from "../../pages/_app";
import { Select } from "./Select";

export const Todo = ({ todo }) => {
  const { setTodos } = useContext(todoContext);
  const [{ dragging }, drag] = useDrag({
    type: DnDItems.Todo,
    end: (_, monitor) => {
      const dropResult = monitor.getDropResult();
      if (dropResult) {
        setTodos((prevTodos) => {
          return prevTodos.map((prevTodo) => {
            if (prevTodo.id === todo.id) {
              return { ...prevTodo, progress: dropResult.status };
            } else {
              return prevTodo;
            }
          });
        });
      }
    },
    collect: (monitor) => {
      return { dragging: monitor.isDragging() };
    },
  });
  const opacity = dragging ? "opacity-50" : "opacity-100";

  return (
    <div
      ref={drag}
      className={`flex justify-between items-center my-3 min-w-full ${opacity} cursor-pointer`}
    >
      <DragIcon />
      <li className="list-none border border-solid w-full border-gray-300 shadow-md rounded-md py-2 pl-1 mr-2 ml-1">
        {todo.text}
      </li>
      <Select thisTodo={todo} />
    </div>
  );
};

const DragIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 10h16M4 14h16M4 18h16"
      />
    </svg>
  );
};
