import './App.scss';
import Header from './core/components/navigation/Header';
import Routing from './core/components/navigation/Routing';

function App() {
  return (
    <div className='flex flex-col h-full'>
      {/* <Header /> */}
      <Routing />
    </div>
  );
}

export default App;