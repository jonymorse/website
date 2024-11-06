import HomePage from './pages/HomePage';
import DarkModeToggle from './components/DarkModeToggle';

const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Position the DarkModeToggle as a fixed button in the top-right corner */}
      <div className="fixed top-4 right-4 z-50">
        <DarkModeToggle />
      </div>
      <HomePage />
    </div>
  );
};

export default App;
