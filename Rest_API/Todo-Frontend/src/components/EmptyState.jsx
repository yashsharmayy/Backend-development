import React from 'react';
import { Sparkles, SearchX, CheckCircle, ListPlus } from 'lucide-react';

/**
 * EmptyState component rendered when no tasks exist for the current filter or search query.
 */
export default function EmptyState({ activeFilter, searchQuery, onResetSearch }) {
  // Determine appropriate content based on situation
  if (searchQuery) {
    return (
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center space-y-3 my-4">
        <div className="w-14 h-14 bg-white/10 text-slate-300 rounded-2xl mx-auto flex items-center justify-center border border-white/10 shadow-2xs">
          <SearchX className="w-7 h-7" />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-black tracking-tight text-slate-100">NO MATCHING TASKS FOUND</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-sm mx-auto font-medium">
            We couldn't find any task containing <span className="font-bold text-emerald-400">"{searchQuery}"</span>
          </p>
        </div>
        {onResetSearch && (
          <button
            onClick={onResetSearch}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-black uppercase tracking-wider text-emerald-300 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 rounded-xl transition-colors cursor-pointer"
          >
            Clear Search
          </button>
        )}
      </div>
    );
  }

  if (activeFilter === 'completed') {
    return (
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center space-y-3 my-4">
        <div className="w-14 h-14 bg-amber-500/20 text-amber-400 rounded-2xl mx-auto flex items-center justify-center border border-amber-500/30 shadow-2xs text-2xl">
          🎯
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-black tracking-tight text-slate-100">NO COMPLETED TASKS YET</h3>
          <p className="text-xs sm:text-sm text-slate-400 font-medium">
            Check off your active tasks above to see them completed here!
          </p>
        </div>
      </div>
    );
  }

  if (activeFilter === 'active') {
    return (
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center space-y-3 my-4">
        <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-2xl mx-auto flex items-center justify-center border border-emerald-500/30 shadow-2xs">
          <CheckCircle className="w-7 h-7" />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-black tracking-tight text-slate-100">ALL CAUGHT UP!</h3>
          <p className="text-xs sm:text-sm text-slate-400 font-medium">
            You don't have any pending active tasks right now. Great job! 🎉
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 text-center space-y-4 my-4">
      <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-2xl mx-auto flex items-center justify-center border border-emerald-500/30 shadow-lg text-3xl">
        📝
      </div>
      <div className="space-y-1">
        <h3 className="text-xl font-black uppercase tracking-tight text-slate-100">YOUR TASK LIST IS EMPTY</h3>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xs mx-auto font-medium">
          Start your day with focus. Add your first task using the input box above!
        </p>
      </div>
      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/20 text-emerald-300 text-xs font-black uppercase tracking-wider rounded-full border border-emerald-500/30">
        <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
        <span>Pro tip: Press Enter to save tasks instantly</span>
      </div>
    </div>
  );
}
