import React, { useState, useRef, useEffect } from 'react';
import { Plus, Flag } from 'lucide-react';

/**
 * TodoForm component for adding new tasks.
 * Auto-focuses input on load, supports Enter key, prevents empty submissions.
 */
export default function TodoForm({ onAddTodo }) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('medium'); // 'low' | 'medium' | 'high'
  const [error, setError] = useState(false);
  const inputRef = useRef(null);

  // Auto-focus input on load
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedText = text.trim();

    if (!trimmedText) {
      setError(true);
      setTimeout(() => setError(false), 2000);
      return;
    }

    onAddTodo(trimmedText, priority);
    setText('');
    setPriority('medium');
    setError(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div className="relative flex flex-col sm:flex-row items-stretch gap-3 bg-white/10 backdrop-blur-2xl p-3 rounded-3xl border border-white/20 shadow-2xl focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/30 transition-all duration-200">
        <input
          ref={inputRef}
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            if (error) setError(false);
          }}
          placeholder="Write your next task... Press Enter to save"
          className={`flex-1 px-4 py-2.5 text-base sm:text-lg font-bold text-slate-100 placeholder-slate-400/80 bg-transparent focus:outline-none ${error ? 'placeholder-rose-400' : ''
            }`}
        />

        <div className="flex items-center justify-between sm:justify-end gap-2 px-1 sm:px-0">
          {/* Priority Picker */}
          <div className="flex items-center gap-1 bg-black/20 p-1 rounded-2xl border border-white/10 text-xs">
            <span className="text-slate-400 pl-2">
              <Flag className="w-3.5 h-3.5" />
            </span>
            <button
              type="button"
              onClick={() => setPriority('low')}
              className={`px-2.5 py-1 rounded-xl text-[11px] font-black uppercase tracking-wider transition-colors cursor-pointer ${priority === 'low'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
                }`}
              title="Low Priority"
            >
              Low
            </button>
            <button
              type="button"
              onClick={() => setPriority('medium')}
              className={`px-2.5 py-1 rounded-xl text-[11px] font-black uppercase tracking-wider transition-colors cursor-pointer ${priority === 'medium'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
                }`}
              title="Medium Priority"
            >
              Med
            </button>
            <button
              type="button"
              onClick={() => setPriority('high')}
              className={`px-2.5 py-1 rounded-xl text-[11px] font-black uppercase tracking-wider transition-colors cursor-pointer ${priority === 'high'
                  ? 'bg-rose-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
                }`}
              title="High Priority"
            >
              High
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs sm:text-sm font-black uppercase tracking-wider rounded-2xl shadow-xl shadow-emerald-500/20 active:scale-95 transition-all duration-200 cursor-pointer shrink-0"
          >
            <Plus className="w-4 h-4 stroke-3" />
            <span>Add Task</span>
          </button>
        </div>
      </div>

      {error && (
        <p className="text-xs text-rose-400 font-bold uppercase tracking-wider px-3 animate-fadeIn">
          Please enter a task description before adding!
        </p>
      )}
    </form>
  );
}
