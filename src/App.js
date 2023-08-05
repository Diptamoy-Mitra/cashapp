
import './App.css';
import Home from './components/Home';
import Investing from './components/Investing';
import Navbar from './components/Navbar';
import Others from './components/Others';

function App() {
  return (
    <div className="App text-2xl font-bold">
      {/* <h1>Hello world</h1> */}
      <Navbar></Navbar>
      <Home></Home>
      <Others />
      <Investing />
    </div>
  );
}

export default App;
