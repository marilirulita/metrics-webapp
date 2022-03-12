import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BsGraphUp } from 'react-icons/bs';
import { RiArrowRightCircleLine } from 'react-icons/ri';

const Details = () => {
  const location = useLocation();
  const [data, setData] = useState({});

  useEffect(() => {
    setData(location.state);
  }, [location]);

  const selectedData = ['sector', 'industry', 'country', 'marketCap', 'volume', 'lastAnnualDividend', 'beta'];

  const filteredData = selectedData.reduce((obj, key) => ({ ...obj, [key]: data[key] }), {});

  return (
    <div className="home-container">
      <div className="header-style">
        <span>
          <BsGraphUp color="#b13967" />
        </span>
        <div className="header-text-style">
          <h2>{data.companyName}</h2>
          <span>
            $
            {data.price}
          </span>
        </div>
      </div>
      <h4>COMPANY STOCK BREAKDOWN</h4>
      <div className="detail-section">
        { Object.keys(filteredData).map((key) => (
          <div key={key} className="details-data">
            <h3>
              {key}
              :
              {' '}
            </h3>
            <div className="details-text">
              <span>{filteredData[key]}</span>
              <span><RiArrowRightCircleLine size="30px" /></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Details;
