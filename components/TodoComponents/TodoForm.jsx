import { Button, Container, TextInput } from "@mantine/core";
import React, { useContext, useState } from "react";
import { todoContext } from "../../pages/_app";

export const TodoForm = () => {
  const [todoText, setTodoText] = useState("");
  const { setTodos } = useContext(todoContext);
  return (
    <Container style={{ marginTop: "10px", display: "flex" }} className="p-0">
      <TextInput
        style={{ marginRight: "5px" }}
        value={todoText}
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          setTodos((prevTodos) => {
            return [
              ...prevTodos,
              { id: prevTodos.length + 1, text: todoText, progress: "pending" },
            ];
          });
        }}
      >
        追加
      </Button>
    </Container>
  );
};
