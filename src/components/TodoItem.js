import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import { useState } from "react";
import "./TodoItem.css";

function TodoItem({ todo, index, todos, setTodos }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editTodoName, setEditTodoName] = useState("");

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

  const handleEdit = () => {
    setIsEdit(!isEdit);
    setEditTodoName(todo.name);
  };

  const handleSubmit = (e) => {
    if (e.keyCode == 13) {
      console.log("in");
      const newTodos = todos.map((item) => {
        if (todo.id == item.id) {
          return {
            ...item,
            name: editTodoName,
          };
        } else {
          return item;
        }
      });
      console.log(newTodos);
      setTodos(newTodos);
      setIsEdit(false);
    }
  };

  return (
    <div className="todo-item-wrapper">
      <div className="todo-item-text">
        <div>{index}.</div>
        {isEdit ? (
          <input
            type="text"
            value={editTodoName}
            onChange={(e) => {
              setEditTodoName(e.target.value);
            }}
            onKeyDown={handleSubmit}
          />
        ) : (
          <div>{todo.name}</div>
        )}
      </div>
      <div className="todo-item-buttons">
        <button className="pencil-button" onClick={handleEdit}>
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
