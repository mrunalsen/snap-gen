import { useLocation } from 'react-router-dom';
import './App.scss';
import Header from './core/components/navigation/Header';
import Routing from './core/components/navigation/Routing';

function App() {
  const location = useLocation();
  const currentPath = location.pathname;
  const showHeader = currentPath !== '/' && currentPath !== '/signup';

  return (
    <div className='flex flex-col h-full'>
      {/* Start : Header */}
      {showHeader && <Header />}
      {/* End : Header */}
      <Routing />
    </div>
  );
}

export default App;