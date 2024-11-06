import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for initial dark mode preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const themeFromStorage = localStorage.getItem('theme');

    if (themeFromStorage === 'dark' || (themeFromStorage === null && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-6 right-6 sm:top-8 sm:right-8 p-2.5 rounded-lg 
                 bg-white dark:bg-gray-800 
                 hover:bg-gray-100 dark:hover:bg-gray-700 
                 transition-all duration-200
                 shadow-lg dark:shadow-gray-700/50
                 border border-gray-200 dark:border-gray-700
                 z-50"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <Sun className="w-6 h-6 text-yellow-500" />
      ) : (
        <Moon className="w-6 h-6 text-blue-600" />
      )}
    </button>
  );
};

export default DarkModeToggle;