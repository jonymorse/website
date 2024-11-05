import HomePage from './pages/HomePage';
import DarkModeToggle from './components/DarkModeToggle';

const App = () => {
  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200`}>
      <DarkModeToggle />
      <HomePage />
    </div>
  );
};
export default App;