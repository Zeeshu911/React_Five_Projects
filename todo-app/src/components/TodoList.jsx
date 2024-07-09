import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todo, deleteTask }) => {
  return (
    <>
      <section className="todo-list">
        <h1>Todos</h1>
        <div className="container">
          {todo && todo.length > 0 ? (
            todo.map((element) => {
              return (
                <TodoItem
                  deleteTask={deleteTask}
                  element={element}
                  key={element.id}
                />
              );
            })
          ) : (
            <p>You've no tasks todo.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default TodoList;
