import { useEffect, useState } from 'react';

const Home = () => {
  const [state, setState] = useState([]);

  const url1 = 'https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&exchange=NASDAQ&dividendMoreThan=0&limit=100&apikey=739ea7778d9cd30c6b10af22ad6a6b1a';

  const exchange = ['ETF', 'MUTUAL_FUND', 'COMMODITY', 'INDEX', 'CRYPTO', 'FOREX', 'TSX', 'AMEX', 'NASDAQ', 'NYSE', 'EURONEXT', 'XETRA', 'NSE', 'LSE'];

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
      <h2>Select exchange data to filter</h2>

      {exchange.map((ex) => (
        <div key={ex}>
          <div style={elementStyle}>{ex}</div>
          <h3>Companies</h3>
          <div style={cotainerStyle}>
            {state.map((com) => <div key={com} style={elementStyle}>{com.companyName}</div>)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
