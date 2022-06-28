import { useContext, useEffect, useState } from "react";
import { NativeSelect } from "@mantine/core";
import { todoContext } from "../../pages/_app";

const data = [
  { key: "pending", value: "未完了" },
  { key: "processing", value: "対応中" },
  { key: "complete", value: "完了" },
];

export const Select = ({ thisTodo }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    const findData = data.find((d) => d.key === thisTodo.progress);
    console.log(findData);
    setValue(findData.value);
  }, [thisTodo]);
  const { setTodos } = useContext(todoContext);

  const handleTodo = (progress) => {
    console.log("progress", progress);
    const findData = data.find((d) => {
      return d.value === progress;
    });
    console.log("progress", findData);
    const targetProgress = findData.key;
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === thisTodo.id) {
          return { ...todo, progress: targetProgress };
        } else {
          return todo;
        }
      });
    });
    setValue(progress);
  };
  return (
    <NativeSelect
      data={data.map((d) => {
        return d.value;
      })}
      value={value}
      onChange={(event) => handleTodo(event.target.value)}
      style={{ minWidth: "85px" }}
    />
  );
};
