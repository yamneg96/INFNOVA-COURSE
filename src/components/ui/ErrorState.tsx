import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, X } from 'lucide-react';

interface ErrorStateProps {
  message?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({ 
  message = 'Something went wrong.' 
}) => {
  // Internal state to handle the UI dismissal
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (message) {
      setIsVisible(true);
    }
  }, [message]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && message && (
        <motion.div
          layout
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-md"
        >
          <div className="bg-white border border-red-100 shadow-[0_10px_40px_rgba(0,0,0,0.1)] rounded-xl overflow-hidden">
            <div className="flex items-center gap-4 p-4">
              {/* Error Icon */}
              <div className="bg-red-50 p-2 rounded-lg shrink-0">
                <AlertCircle className="text-red-500 w-5 h-5" />
              </div>

              {/* Content */}
              <div className="flex-1 text-left">
                <p className="text-sm font-bold text-slate-900 leading-none">Error</p>
                <p className="text-[13px] text-slate-500 font-medium mt-1.5 leading-tight">
                  {message}
                </p>
              </div>

              {/* Close Button - Now triggers internal handleClose */}
              <button 
                onClick={handleClose}
                className="p-1.5 hover:bg-slate-100 rounded-lg transition-all text-slate-400 hover:text-red-500 active:scale-90"
                aria-label="Close error"
              >
                <X size={18} strokeWidth={2.5} />
              </button>
            </div>

            {/* Progress Bar Animation (Optional: helps show the "life" of the error) */}
            <motion.div 
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 6, ease: "linear" }}
              onAnimationComplete={handleClose} // Auto-close when bar finishes
              className="h-1 bg-red-500 origin-left w-full opacity-40"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};