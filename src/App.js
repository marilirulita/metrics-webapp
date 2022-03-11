import {
  Routes, Route, Link, useLocation,
} from 'react-router-dom';
import { RiArrowLeftSLine } from 'react-icons/ri';
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
      <nav>
        <Link to="/"><RiArrowLeftSLine size="25px" /></Link>
        <span>{location.pathname === '/details' ? 'Company Stock' : 'Higher Market Cap'}</span>
        <div>
          <span><BiMicrophone /></span>
          <span><FiSettings /></span>
        </div>

      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
