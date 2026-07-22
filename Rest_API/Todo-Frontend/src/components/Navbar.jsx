import React from 'react';
import { CheckSquare, Calendar, Sparkles } from 'lucide-react';

/**
 * Navbar component displaying header title, logo, and current date.
 */
export default function Navbar() {
  // Format current date nicely
  const today = new Date();
  const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });
  const formattedDate = today.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <header className="sticky top-0 z-30 w-full bg-slate-900/60 backdrop-blur-xl border-b border-white/10 shadow-lg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        {/* App Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-slate-950 shadow-lg shadow-emerald-500/20">
            <CheckSquare className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-black tracking-tighter uppercase text-slate-100">
                Task<span className="text-emerald-400">Flow</span>
              </h1>
              <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <Sparkles className="w-3 h-3" /> Pro
              </span>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Daily Focus Manager</p>
          </div>
        </div>

        {/* Current Date Display */}
        <div className="text-center sm:text-right">
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 flex items-center justify-center sm:justify-end gap-1">
            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
            <span>{dayName}</span>
          </p>
          <p className="text-base sm:text-lg font-black text-slate-100 tracking-tight">{formattedDate}</p>
        </div>
      </div>
    </header>
  );
}
