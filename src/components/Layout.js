import { useState } from 'react';
import Sidebar from './Sidebar';  // Import from same directory

const Layout = ({ children, sidebarProps }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar {...sidebarProps} />
      <main className="min-h-screen bg-gray-50 transition-all duration-300 ml-64">
        {children}
      </main>
    </div>
  );
};

export default Layout;