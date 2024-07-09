import React from "react";
import { useState } from "react";

const TodoForm = ({ addTask }) => {
  const [text, setText] = useState("");
  return (
    <>
      <div className="todo-form">
        <h1>Add New Todo</h1>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Todo Task"
        />
        <button onClick={() => addTask(text)}>Add Task</button>
      </div>
    </>
  );
};

export default TodoForm;
