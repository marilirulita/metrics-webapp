import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiArrowRightCircleLine } from 'react-icons/ri';
import { BsGraphUp, BsFileBarGraph } from 'react-icons/bs';
import { getFinancialData } from '../redux/financial/financial';

const Home = () => {
  const financialData = useSelector((store) => store.financialReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFinancialData());
  }, []);

  const cotainerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  };

  const elementStyle = {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
  };
  const elementHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  return (
    <div className="home-container">
      <div className="header-style">
        <span><BsGraphUp color="blue" size="200px" /></span>
        <h2 className="header-style-child">NASDAQ</h2>
      </div>
      <h4>MARKET PRICE BY COMPANIES</h4>
      <div style={cotainerStyle}>
        {financialData.map((com, i) => {
          const index = `kei${i}`;
          return (
            <div key={index} style={elementStyle}>
              <div style={elementHeaderStyle}>
                <span><BsFileBarGraph color="blue" size="100px" /></span>
                <Link to="/details" state={{ ...com }}><RiArrowRightCircleLine size="30px" color="blue" /></Link>
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
