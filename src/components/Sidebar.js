import { useState } from 'react';
import { Menu, X, Home, BookOpen, FolderGit2, Mail, ChevronRight } from 'lucide-react';

const Sidebar = ({ onNavigate, currentPath = '/', children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const navItems = [
    { title: 'Home', path: '/', icon: <Home className="w-5 h-5" /> },
    { title: 'Publications', path: '/publications', icon: <BookOpen className="w-5 h-5" /> },
    { title: 'Projects', path: '/projects', icon: <FolderGit2 className="w-5 h-5" /> },
    { title: 'Contact', path: '/contact', icon: <Mail className="w-5 h-5" /> }
  ];

  const NavItem = ({ item }) => {
    const isActive = currentPath === item.path;
    
    return (
      <button
        onClick={() => onNavigate(item.path)}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all
          ${isActive ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}
          ${isCollapsed ? 'justify-center' : 'justify-start'}`}
      >
        {item.icon}
        {!isCollapsed && <span>{item.title}</span>}
      </button>
    );
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <aside className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200
        transition-all duration-300 flex flex-col
        ${isCollapsed ? 'w-16' : 'w-64'}`}
      >
        <div className={`h-16 flex items-center px-4 border-b border-gray-200
          ${isCollapsed ? 'justify-center' : 'justify-between'}`}
        >
          {!isCollapsed && <span className="font-semibold">Your Name</span>}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <ChevronRight className={`w-5 h-5 transition-transform duration-300
              ${isCollapsed ? 'rotate-180' : ''}`} 
            />
          </button>
        </div>

        <nav className="flex-1 py-4 px-2 space-y-1">
          {navItems.map((item) => (
            <NavItem key={item.path} item={item} />
          ))}
        </nav>

        <button
          className="md:hidden absolute top-4 -right-12 p-2 bg-white rounded-lg 
            shadow-lg border border-gray-200"
          onClick={() => setIsCollapsed(true)}
        >
          <X className="w-5 h-5" />
        </button>
      </aside>

      <main className={`flex-1 transition-all duration-300 bg-gray-50
        ${isCollapsed ? 'ml-16' : 'ml-64'}`}>
        {children}
      </main>
    </div>
  );
};

export default Sidebar;