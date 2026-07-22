import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertTriangle, Trash2, X } from 'lucide-react';

/**
 * ClearConfirmModal popup component asking user confirmation before bulk deleting completed tasks.
 */
export default function ClearConfirmModal({ isOpen, onClose, onConfirm, count }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          className="relative w-full max-w-sm bg-slate-900 border border-white/20 rounded-3xl p-6 shadow-2xl space-y-4 text-slate-100"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 text-slate-400 hover:text-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Icon & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black uppercase tracking-wider text-slate-100">CLEAR COMPLETED TASKS?</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">THIS CANNOT BE UNDONE</p>
            </div>
          </div>

          <p className="text-sm font-medium text-slate-300">
            Are you sure you want to permanently delete <span className="font-black text-rose-400">{count}</span> completed {count === 1 ? 'task' : 'tasks'}?
          </p>

          {/* Action buttons */}
          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onConfirm();
                onClose();
              }}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-black uppercase tracking-wider text-white bg-rose-600 hover:bg-rose-500 rounded-xl shadow-lg shadow-rose-600/30 transition-all cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear {count} Tasks</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
