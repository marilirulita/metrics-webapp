import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaMoneyBillWave } from 'react-icons/fa';
import { RiArrowRightCircleLine } from 'react-icons/ri';
import { BsGraphUp } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { getFinancialData } from '../redux/financial/financial';

const Home = () => {
  const financialData = useSelector((store) => store.financialReducer);
  const [state, setState] = useState([]);
  const dispatch = useDispatch();

  const filterDataToSearch = (str) => {
    const filteredData = financialData.filter((fin) => fin.companyName
      .toLowerCase().startsWith(str.toLowerCase()));
    setState(filteredData);
  };

  useEffect(() => {
    dispatch(getFinancialData());
  }, []);

  useEffect(() => {
    setState(financialData);
  }, [financialData]);

  const cotainerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  };

  let change = false;
  let background = '#dc4681';
  return (
    <div className="home-container">
      <div className="header-style">
        <span><FaMoneyBillWave color="#b13967" /></span>
        <h2>NASDAQ</h2>
      </div>
      <div className="search-bar">
        <BiSearchAlt />
        <input type="text" placeholder="Search a company in NASDAQ" onChange={(e) => filterDataToSearch(e.target.value)} />
      </div>
      <h4>MARKET PRICE BY COMPANIES</h4>
      <div style={cotainerStyle}>
        {state.map((com, i) => {
          const index = `kei${i}`;
          change = i % 2 === 0 || i === 0;
          if (!change) {
            if (background === '#dc4681') {
              background = '#d04278';
            } else {
              background = '#dc4681';
            }
          }
          return (
            <div key={index} className="element-style" style={{ backgroundColor: background }}>
              <div className="element-header-style">
                <span><BsGraphUp size="100px" /></span>
                <Link to="/details" state={{ ...com }}><RiArrowRightCircleLine size="30px" color="white" /></Link>
              </div>
              <div className="element-text-style">
                <h3>{com.companyName}</h3>
                <span>
                  $
                  {com.price}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
