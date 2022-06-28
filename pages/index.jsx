import { CustomContainer } from "../components/Layout";
import { TodoForm, TodoList } from "../components/TodoComponents";

export default function Home() {
  return (
    <>
      <CustomContainer>
        <TodoForm />
        <TodoList />
      </CustomContainer>
    </>
  );
}
