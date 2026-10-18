import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      onClick={toggleTheme}
      type="button"
      className={`relative p-2.5 rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-[#D47A5B] dark:focus:ring-[#D4A64A] flex items-center justify-center ${
        isDark
          ? 'bg-[#351707] border-[#D4A64A]/40 text-[#D4A64A] hover:bg-[#43200C] hover:border-[#D4A64A]'
          : 'bg-[#FDF1E8] border-[#F0D5C4] text-[#D47A5B] hover:bg-[#FBE6DA] hover:border-[#D47A5B]'
      } ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        {isDark ? (
          <Sun className="w-4 h-4 fill-current" />
        ) : (
          <Moon className="w-4 h-4 fill-current" />
        )}
      </motion.div>
    </motion.button>
  );
};
