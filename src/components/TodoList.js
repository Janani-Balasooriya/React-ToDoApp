import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import "./TodoList.css";

function TodoList() {
  return (
    <div>
      <h2>My Todos</h2>
      <TodoInput />
      <div>
        <TodoItem />
      </div>
    </div>
  );
}

export default TodoList;
