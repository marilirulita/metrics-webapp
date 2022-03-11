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

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '1px solid gray',
    padding: '10px',
  };
  const headerStyleChil = {
    display: 'flex',
  };
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
      <div style={headerStyle}>
        <span style={headerStyleChil}><BsGraphUp style={backImage} size="200px" /></span>
        <h2 style={headerStyleChil}>NASDAQ</h2>
      </div>
      <h4>STATS BY COMPANIES</h4>
      <div style={cotainerStyle}>
        {financialData.map((com, i) => {
          const index = `kei${i}`;
          return (
            <div key={index} style={elementStyle}>
              <div style={elementHeaderStyle}>
                <span><BsFileBarGraph style={backImage} size="100px" /></span>
                <Link to="/details"><RiArrowRightCircleLine size="30px" color="blue" /></Link>
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
