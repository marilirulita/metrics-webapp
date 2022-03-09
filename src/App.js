import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/details">Details</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details" element={<Details />} />
        </Routes>
        <p>
          Website under construction!
        </p>
      </header>
    </div>
  );
}

export default App;
