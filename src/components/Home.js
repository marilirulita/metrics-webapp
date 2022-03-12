import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiArrowRightCircleLine } from 'react-icons/ri';
import { BsGraphUp } from 'react-icons/bs';
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

  let change = false;
  let background = '#dc4681';
  return (
    <div className="home-container">
      <div className="header-style">
        <span><BsGraphUp /></span>
        <h2>NASDAQ</h2>
      </div>
      <h4>MARKET PRICE BY COMPANIES</h4>
      <div style={cotainerStyle}>
        {financialData.map((com, i) => {
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
