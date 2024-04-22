import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="flex">
      <Navbar/>
      <Dashboard/>
    </div>
  );
}

export default App;
