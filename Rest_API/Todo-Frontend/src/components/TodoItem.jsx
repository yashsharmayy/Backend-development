import React, { useState, useRef, useEffect } from 'react';
import { Check, Pencil, Trash2, X, Flag, Calendar } from 'lucide-react';

/**
 * TodoItem component representing an individual task card.
 * Supports toggle completion, inline edit, delete, and priority indicators.
 */
export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [editPriority, setEditPriority] = useState(todo.priority || 'medium');
  const editInputRef = useRef(null);

  useEffect(() => {
    if (isEditing && editInputRef.current) {
      editInputRef.current.focus();
      editInputRef.current.select();
    }
  }, [isEditing]);

  const handleSave = () => {
    const trimmed = editText.trim();
    if (trimmed) {
      onEdit(todo.id, trimmed, editPriority);
      setIsEditing(false);
    } else {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setEditText(todo.text);
      setEditPriority(todo.priority || 'medium');
      setIsEditing(false);
    }
  };

  // Date formatting helper
  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return '';
    }
  };

  // Priority color map
  const priorityConfig = {
    high: { bg: 'bg-rose-500/20 border-rose-500/30 text-rose-300', label: 'High Priority' },
    medium: { bg: 'bg-amber-500/20 border-amber-500/30 text-amber-300', label: 'Med Priority' },
    low: { bg: 'bg-emerald-500/20 border-emerald-500/30 text-emerald-300', label: 'Low Priority' }
  };

  const priorityStyle = priorityConfig[todo.priority || 'medium'] || priorityConfig.medium;

  return (
    <div
      className={`group relative bg-white/5 hover:bg-white/8 border rounded-2xl p-4 transition-all duration-200 ${todo.completed
          ? 'border-white/5 opacity-75'
          : 'border-white/10 hover:border-emerald-500/40'
        }`}
    >
      <div className="flex items-start gap-4">
        {/* Custom Checkbox */}
        <button
          type="button"
          onClick={() => onToggle(todo.id)}
          className={`mt-0.5 w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-200 cursor-pointer ${todo.completed
              ? 'bg-emerald-500 border-emerald-500 text-slate-950 shadow-[0_0_10px_rgba(16,185,129,0.4)]'
              : 'border-emerald-500/50 hover:border-emerald-400 bg-transparent'
            }`}
          title={todo.completed ? 'Mark incomplete' : 'Mark completed'}
        >
          {todo.completed && <Check className="w-3.5 h-3.5 stroke-3" />}
        </button>

        {/* Task Content / Edit View */}
        <div className="flex-1 min-w-0">
          {isEditing ? (
            <div className="space-y-3">
              <input
                ref={editInputRef}
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full px-3 py-2 text-sm font-bold bg-black/40 border border-emerald-500/60 rounded-xl focus:outline-none text-slate-100"
              />
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1 bg-black/30 p-1 rounded-lg text-xs border border-white/10">
                  {['low', 'medium', 'high'].map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setEditPriority(p)}
                      className={`px-2 py-0.5 rounded  font-black uppercase tracking-wider text-[10px] ${editPriority === p
                          ? 'bg-emerald-500 text-slate-950'
                          : 'text-slate-400 hover:text-slate-200'
                        }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={handleSave}
                    className="p-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors cursor-pointer"
                    title="Save (Enter)"
                  >
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </button>
                  <button
                    onClick={() => {
                      setEditText(todo.text);
                      setIsEditing(false);
                    }}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 transition-colors cursor-pointer"
                    title="Cancel (Esc)"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <p
                onClick={() => onToggle(todo.id)}
                className={`text-sm sm:text-base wrap-break-word cursor-pointer transition-all duration-200 select-none ${todo.completed
                    ? 'line-through italic text-slate-400 font-bold'
                    : 'text-slate-100 font-bold'
                  }`}
              >
                {todo.text}
              </p>

              {/* Badges & Meta info */}
              <div className="flex flex-wrap items-center gap-2 mt-2 text-xs">
                {/* Priority Badge */}
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md border text-[10px] font-black uppercase tracking-tighter ${priorityStyle.bg}`}
                >
                  <Flag className="w-3 h-3" />
                  {priorityStyle.label}
                </span>

                {/* Date Created */}
                {todo.createdAt && (
                  <span className="inline-flex items-center gap-1 text-slate-400 text-[11px] font-bold uppercase tracking-wider">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    {formatDate(todo.createdAt)}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        {!isEditing && (
          <div className="flex items-center gap-1 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
            <button
              onClick={() => setIsEditing(true)}
              className="p-2 hover:bg-white/10 rounded-lg text-slate-400 hover:text-slate-100 transition-colors cursor-pointer"
              title="Edit task"
            >
              <Pencil className="w-4 h-4" />
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="p-2 hover:bg-rose-500/20 rounded-lg text-rose-400 transition-colors cursor-pointer"
              title="Delete task"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
