import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import "./TodoItem.css";

function TodoItem({ todo, index, todos, setTodos }) {
  const handleDelete = () => {
    const newTodos = todos.filter((item) => {
      if (todo.id == item.id) {
        return false;
      } else {
        return true;
      }
    });
    console.log(newTodos);
    setTodos(newTodos);
  };

  return (
    <div className="todo-item-wrapper">
      <div className="todo-item-text">
        <div>{index}.</div>
        <div>{todo.name}</div>
      </div>
      <div className="todo-item-buttons">
        <button className="pencil-button">
          <PencilIcon />
        </button>
        <button className="trash-button" onClick={handleDelete}>
          <TrashIcon />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
