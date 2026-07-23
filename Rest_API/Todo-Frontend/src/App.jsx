import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import {
  addItemToServer,
  deleteItemOnserver,
  getItemToServer,
} from "./service/todoApi";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getItemToServer().then((initialItems) => {
      setTodos(initialItems);
    });
  }, []);


  const addTodo = async (text) => {
    const date = new Date().toLocaleString();

    try {
      const serverItem = await addItemToServer(text, date);

      setTodos((prevTodos) => [
        serverItem,
        ...prevTodos,
      ]);

    } catch (error) {
      console.log(error);
    }
  };


  const deleteTodo = async (id) => {
    try {
      await deleteItemOnserver(id);

      setTodos((prevTodos) =>
        prevTodos.filter((todo) => todo.id !== id)
      );

    } catch (error) {
      console.log("Delete Error:", error);
    }
  };


  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-gray-900">
      <Navbar />

      <div className="max-w-3xl mx-auto px-5 py-10">
        <TodoForm onAdd={addTodo} />

        <TodoList
          todos={todos}
          onDelete={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;