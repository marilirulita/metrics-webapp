import {
  Routes, Route, Link, useLocation,
} from 'react-router-dom';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { BiMicrophone } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { useEffect } from 'react';
import Home from './components/Home';
import Details from './components/Details';
import './App.css';

function App() {
  const location = useLocation();
  useEffect(() => {
  }, [location]);

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/"><MdKeyboardArrowLeft /></Link>
          <span>{location.pathname === '/details' ? 'Company Stock' : 'Higher Market Cap'}</span>
          <span><BiMicrophone /></span>
          <span><FiSettings /></span>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details" element={<Details />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
