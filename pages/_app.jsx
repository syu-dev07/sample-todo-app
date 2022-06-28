import { MantineProvider } from "@mantine/core";
import { createContext, useState } from "react";
import "../styles/globals.css";

const INITIAL_TODOS = [
  { id: "1", text: "todo1", progress: "pending" },
  { id: "2", text: "todo2", progress: "processing" },
  { id: "3", text: "todo3", progress: "complete" },
];

export const todoContext = createContext({
  todos: INITIAL_TODOS,
  setTodos: () => {},
});

const MyApp = ({ Component, pageProps }) => {
  const [todos, setTodos] = useState(INITIAL_TODOS);
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <todoContext.Provider value={{ todos, setTodos }}>
        <Component {...pageProps} />
      </todoContext.Provider>
    </MantineProvider>
  );
};

export default MyApp;
