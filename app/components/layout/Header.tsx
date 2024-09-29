import React from 'react';
import { useTheme } from 'src/context/ThemeContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
	<header className="bg-gray-800 text-white p-4 flex justify-between items-center">
	  <h1 className="text-2xl">Supposed to be Navbar</h1>
	  <button
		onClick={toggleTheme}
		className="px-4 py-2 bg-gray-700 text-white rounded"
	  >
		Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
	  </button>
	</header>
  );
};

export default Header;