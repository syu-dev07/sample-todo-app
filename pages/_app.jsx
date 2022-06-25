import { createContext, useState } from "react";
import "../styles/globals.css";

const INITIAL_TODOS = [
  { id: "1", text: "todo1", isDone: false },
  { id: "2", text: "todo2", isDone: true },
];

export const todoContext = createContext({
  todos: INITIAL_TODOS,
  setTodos: () => {},
});

function MyApp({ Component, pageProps }) {
  const [todos, setTodos] = useState(INITIAL_TODOS);
  return (
    <todoContext.Provider value={{ todos, setTodos }}>
      <Component {...pageProps} />
    </todoContext.Provider>
  );
}

export default MyApp;
