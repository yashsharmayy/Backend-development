import { useState } from "react";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      _id: Date.now(),
      text,
    };

    setTodos([newTodo, ...todos]);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-gray-900">

      <Navbar />

      <div className="max-w-3xl mx-auto px-5 py-10">

        <div className="bg-slate-900/70 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-slate-700">

          <div className="mb-8">
            <h2 className="text-4xl font-bold text-white">
              My Tasks
            </h2>

            <p className="text-slate-400 mt-2">
              Organize your daily work efficiently.
            </p>
          </div>

          <TodoForm onAdd={addTodo} />

          <div className="mb-5">
            <p className="text-slate-300">
              Total Tasks:
              <span className="ml-2 bg-blue-600 px-3 py-1 rounded-full">
                {todos.length}
              </span>
            </p>
          </div>

          <TodoList todos={todos} />

        </div>

      </div>
    </div>
  );
}

export default App;