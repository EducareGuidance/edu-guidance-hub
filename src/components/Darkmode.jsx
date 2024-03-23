import React, { useState } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={toggleDarkMode}
        className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default DarkModeToggle;