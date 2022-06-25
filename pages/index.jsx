import styles from "../styles/Home.module.css";
import { Header } from "./components/Header";
import { TodoFrom } from "./components/TodoFrom";
import { TodoList } from "./components/TodoList";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <TodoFrom />
      <TodoList />
    </div>
  );
}
