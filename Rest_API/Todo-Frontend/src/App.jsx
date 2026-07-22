import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Stats from './components/Stats';
import TodoForm from './components/TodoForm';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import TodoList from './components/TodoList';
import ClearConfirmModal from './components/ClearConfirmModal';

const LOCAL_STORAGE_KEY = 'taskflow_todos_data_v1';

// Initial sample data if local storage is empty
const INITIAL_TODOS = [
  {
    id: '1',
    text: 'Welcome to TaskFlow! Try clicking to mark this task complete.',
    completed: true,
    priority: 'low',
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    text: 'Add your custom tasks using the input field above',
    completed: false,
    priority: 'high',
    createdAt: new Date().toISOString()
  },
  {
    id: '3',
    text: 'Use real-time search and filter tabs to organize your day',
    completed: false,
    priority: 'medium',
    createdAt: new Date().toISOString()
  }
];

export default function App() {
  // Load initial todos from LocalStorage
  const [todos, setTodos] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (err) {
      console.error('Failed to load tasks from local storage:', err);
    }
    return INITIAL_TODOS;
  });

  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'active' | 'completed'
  const [searchQuery, setSearchQuery] = useState('');
  const [isClearModalOpen, setIsClearModalOpen] = useState(false);

  // Auto-save todos to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    } catch (err) {
      console.error('Failed to save tasks to local storage:', err);
    }
  }, [todos]);

  // Derived counts
  const totalCount = todos.length;
  const completedCount = todos.filter((t) => t.completed).length;
  const activeCount = totalCount - completedCount;

  // Add new todo
  const handleAddTodo = (text, priority) => {
    const newTodo = {
      id: Date.now().toString() + Math.random().toString(36).substring(2, 6),
      text,
      completed: false,
      priority: priority || 'medium',
      createdAt: new Date().toISOString()
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  // Toggle todo completed state
  const handleToggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete single todo
  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Edit todo text & priority
  const handleEditTodo = (id, newText, newPriority) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: newText, priority: newPriority } : todo
      )
    );
  };

  // Bulk clear completed todos
  const handleConfirmClearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-indigo-950 via-slate-900 to-emerald-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Header Bar */}
      <Navbar />

      {/* Main Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
        {/* Metric Summary Cards */}
        <Stats
          totalTasks={totalCount}
          completedTasks={completedCount}
          activeTasks={activeCount}
        />

        {/* Task Input Form */}
        <section className="space-y-2">
          <TodoForm onAddTodo={handleAddTodo} />
        </section>

        {/* Controls Section: Search & Filter */}
        <section className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            <div className="md:col-span-5">
              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </div>
            <div className="md:col-span-7">
              <FilterBar
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
                totalCount={totalCount}
                activeCount={activeCount}
                completedCount={completedCount}
                onClearCompleted={() => setIsClearModalOpen(true)}
              />
            </div>
          </div>
        </section>

        {/* Task List Section */}
        <section className="pt-2">
          <TodoList
            todos={todos}
            activeFilter={activeFilter}
            searchQuery={searchQuery}
            onToggle={handleToggleTodo}
            onDelete={handleDeleteTodo}
            onEdit={handleEditTodo}
            onResetSearch={() => setSearchQuery('')}
          />
        </section>
      </main>

      {/* Confirmation Modal */}
      <ClearConfirmModal
        isOpen={isClearModalOpen}
        onClose={() => setIsClearModalOpen(false)}
        onConfirm={handleConfirmClearCompleted}
        count={completedCount}
      />

      {/* Footer */}
      <footer className="w-full border-t border-white/10 bg-black/20 backdrop-blur-md py-6 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
          Made with React + Tailwind
        </p>
      </footer>
    </div>
  );
}
