import React from 'react';
import { Search, X } from 'lucide-react';

/**
 * SearchBar component for filtering tasks by query in real time.
 */
export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
        <Search className="w-4 h-4" />
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="SEARCH TASKS IN REAL-TIME..."
        className="w-full pl-11 pr-10 py-3 text-xs sm:text-sm font-bold tracking-wider uppercase bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all duration-200"
      />
      {searchQuery && (
        <button
          type="button"
          onClick={() => setSearchQuery('')}
          className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-200 transition-colors"
          title="Clear search"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
