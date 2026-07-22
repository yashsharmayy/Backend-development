import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import TodoItem from './TodoItem';
import EmptyState from './EmptyState';

/**
 * TodoList component that filters todos based on search query and active filter,
 * and renders list items with motion enter/exit animations.
 */
export default function TodoList({
  todos,
  activeFilter,
  searchQuery,
  onToggle,
  onDelete,
  onEdit,
  onResetSearch
}) {
  // Filter logic
  const filteredTodos = todos.filter((todo) => {
    // 1. Status filter
    if (activeFilter === 'active' && todo.completed) return false;
    if (activeFilter === 'completed' && !todo.completed) return false;

    // 2. Search query filter
    if (searchQuery.trim()) {
      return todo.text.toLowerCase().includes(searchQuery.toLowerCase().trim());
    }

    return true;
  });

  if (filteredTodos.length === 0) {
    return (
      <EmptyState
        activeFilter={activeFilter}
        searchQuery={searchQuery}
        onResetSearch={onResetSearch}
      />
    );
  }

  return (
    <div className="space-y-2.5">
      <AnimatePresence mode="popLayout">
        {filteredTodos.map((todo) => (
          <motion.div
            key={todo.id}
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, y: -12 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            layout
          >
            <TodoItem
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
