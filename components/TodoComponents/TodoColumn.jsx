import { useDrop } from "react-dnd";
import { DnDItems } from "../../DndConfig";
import { Todo } from "./Todo";

export const TodoColumn = ({ todos, status, title }) => {
  const [, drop] = useDrop({
    accept: DnDItems.Todo,
    drop: () => ({ status }),
  });
  return (
    <div ref={drop}>
      <h1>{title}</h1>
      <ul className="px-0 pb-3">
        {todos.length &&
          todos
            .filter((todo) => {
              if (todo.progress === status) {
                return todo;
              }
            })
            .map((todo) => {
              return <Todo key={todo.id} todo={todo} />;
            })}
      </ul>
    </div>
  );
};
