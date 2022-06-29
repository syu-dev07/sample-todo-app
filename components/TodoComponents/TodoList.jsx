import React, { useContext } from "react";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { todoContext } from "../../pages/_app";
import { TodoColumn } from "./TodoColumn";

const todoProps = [
  { title: "未完了", status: "pending" },
  { title: "対応中", status: "processing" },
  { title: "完了", status: "complete" },
];

export const TodoList = () => {
  const { todos } = useContext(todoContext);
  console.log(todos, todoProps);
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        {todoProps.map((tp, index) => {
          return (
            <TodoColumn
              key={index}
              status={tp.status}
              title={tp.title}
              todos={todos}
            />
          );
        })}
      </DndProvider>
    </div>
  );
};
