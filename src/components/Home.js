import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { RiArrowRightCircleLine } from 'react-icons/ri';

const Home = () => {
  const [state, setState] = useState([]);

  const url1 = 'https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&exchange=NASDAQ&dividendMoreThan=0&limit=100&apikey=739ea7778d9cd30c6b10af22ad6a6b1a';

  const getApiData = async () => {
    const getData = await fetch(url1);
    const getDataJson = await getData.json();
    setState(getDataJson);
  };

  useEffect(() => {
    getApiData();
  }, []);

  const elementStyle = {
    border: '1px solid gray',
    padding: '10px',
  };
  const cotainerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  };
  return (
    <div>
      <div style={elementStyle}>
        <img src="/" alt="" />
        <h2>NASDAQ</h2>
      </div>
      <h4>STATS BY COMPANIES</h4>
      <div style={cotainerStyle}>
        {state.map((com, i) => {
          const index = `kei${i}`;
          return (
            <div key={index} style={elementStyle}>
              <img src="/" alt="" />
              <Link to="/details"><RiArrowRightCircleLine /></Link>
              <h4>{com.companyName}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
