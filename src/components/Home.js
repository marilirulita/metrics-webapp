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
  const backImage = {
    color: 'blue',
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
  const elementTextSyle = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'right',
    margin: '10px 0',
  };
  return (
    <div className="home-container">
      <div className="header-style">
        <span className="header-style-chil"><BsGraphUp style={backImage} size="200px" /></span>
        <h2 className="header-style-chil">NASDAQ</h2>
      </div>
      <h4>STATS BY COMPANIES</h4>
      <div style={cotainerStyle}>
        {financialData.map((com, i) => {
          const index = `kei${i}`;
          return (
            <div key={index} style={elementStyle}>
              <div style={elementHeaderStyle}>
                <span><BsFileBarGraph style={backImage} size="100px" /></span>
                <Link to="/details" state={{ ...com }}><RiArrowRightCircleLine size="30px" color="blue" /></Link>
              </div>
              <div style={elementTextSyle}>
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
