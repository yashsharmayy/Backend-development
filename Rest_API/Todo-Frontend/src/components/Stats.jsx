import React from 'react';
import { ListTodo, CheckCircle2, Clock, Trophy } from 'lucide-react';

/**
 * Stats component showing summary metrics and completion progress.
 */
export default function Stats({ totalTasks, completedTasks, activeTasks }) {
  const percentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Hero Stats Card - Tasks Remaining & Completion */}
      <div className="md:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-6xl sm:text-7xl md:text-8xl font-black leading-none tracking-tighter text-slate-100">
              {activeTasks < 10 ? `0${activeTasks}` : activeTasks}
            </h2>
            <p className="text-base sm:text-lg font-bold text-emerald-400 uppercase tracking-tight mt-2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Tasks Remaining
            </p>
          </div>
          {percentage === 100 && totalTasks > 0 && (
            <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              <Trophy className="w-4 h-4 text-emerald-400" /> Done!
            </span>
          )}
        </div>

        {/* Progress Bar */}
        <div className="mt-8 space-y-3">
          <div className="flex justify-between items-end">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Completion Rate
            </span>
            <span className="text-2xl font-black text-slate-100">{percentage}%</span>
          </div>
          <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden p-0.5">
            <div
              className="bg-emerald-500 h-full rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-500"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Grid Counters */}
      <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
        {/* Total Tasks Counter */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col justify-center">
          <div className="flex items-center justify-between">
            <p className="text-3xl sm:text-4xl font-black text-slate-100">
              {totalTasks < 10 ? `0${totalTasks}` : totalTasks}
            </p>
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-slate-300">
              <ListTodo className="w-5 h-5" />
            </div>
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">
            Total Tasks
          </p>
        </div>

        {/* Completed Counter */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col justify-center">
          <div className="flex items-center justify-between">
            <p className="text-3xl sm:text-4xl font-black text-emerald-400">
              {completedTasks < 10 ? `0${completedTasks}` : completedTasks}
            </p>
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">
            Completed
          </p>
        </div>
      </div>
    </div>
  );
}
