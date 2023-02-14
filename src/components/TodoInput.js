import "./TodoInput.css";
import { useState } from "react";
import { PlusIcon } from "@heroicons/react/outline";

function TodoInput({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  const handleClick = () => {
    //id, name, isCompleted
    const newTodo = {
      id: 1,
      name: todo,
      isCompleted: false,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodo("");
  };

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(event) => {
          setTodo(event.target.value);
        }}
      />

      <button onClick={handleClick}>
        <PlusIcon style={{ width: "18px", height: "18px" }} />
      </button>
    </div>
  );
}

export default TodoInput;
