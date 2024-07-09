import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import "./App.css";
import TodoList from "./components/TodoList";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [todo, setTodo] = useState([]);

  //Getting Stored Todos From LocalStorage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodo(storedTodos);
  }, []);

  //Add Task Functionality
  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
    };
    setTodo(todo.unshift(newTask));
    localStorage.setItem("todos", JSON.stringify(todo));
    toast.success("New task added.");
    setTodo(JSON.parse(localStorage.getItem("todos")));
  };

  //Delete Task Functionality
  const deleteTask = (id) => {
    const filteredTodos = todo.filter((item) => item.id !== id);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
    toast.success("Task deleted.");
    setTodo(filteredTodos);
  };

  return (
    <>
      <Navbar />
      <TodoForm addTask={addTask} />
      <TodoList todo={todo} deleteTask={deleteTask} />
      <ToastContainer position="top-right" theme="dark" />
    </>
  );
};

export default App;
