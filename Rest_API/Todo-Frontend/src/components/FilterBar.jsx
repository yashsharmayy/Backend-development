import React from 'react';
import { Trash2, CheckCheck, List, Clock } from 'lucide-react';

/**
 * FilterBar component for switching views (All, Active, Completed)
 * and triggering Clear Completed action.
 */
export default function FilterBar({
  activeFilter,
  setActiveFilter,
  totalCount,
  activeCount,
  completedCount,
  onClearCompleted
}) {
  const filters = [
    { id: 'all', label: 'All', count: totalCount, icon: List },
    { id: 'active', label: 'Active', count: activeCount, icon: Clock },
    { id: 'completed', label: 'Completed', count: completedCount, icon: CheckCheck }
  ];

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-black/20 p-2 rounded-2xl border border-white/10">
      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        {filters.map((filter) => {
          const Icon = filter.icon;
          const isActive = activeFilter === filter.id;
          return (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-200 whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-white text-slate-950 shadow-md'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-slate-400'}`} />
              <span>{filter.label}</span>
              <span
                className={`ml-0.5 px-2 py-0.5 text-[10px] rounded-full font-black ${
                  isActive
                    ? 'bg-slate-900 text-slate-100'
                    : 'bg-white/10 text-slate-300'
                }`}
              >
                {filter.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Clear Completed Button */}
      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-rose-400 hover:bg-rose-500/20 border border-rose-500/30 rounded-xl transition-all duration-200 cursor-pointer active:scale-95 shrink-0"
          title="Clear all completed tasks"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Clear Completed</span>
        </button>
      )}
    </div>
  );
}
