import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import "./TodoItem.css";

function TodoItem({ todo, index }) {
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
        <button className="trash-button">
          <TrashIcon />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
