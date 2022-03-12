import { useLocation } from 'react-router-dom';
import { BsGraphUp } from 'react-icons/bs';
import { RiArrowRightCircleLine } from 'react-icons/ri';

const Details = () => {
  const location = useLocation();
  const data = location.state;
  const selectedData = ['sector', 'industry', 'country', 'marketCap', 'volume', 'lastAnnualDividend', 'beta'];

  const filteredData =  selectedData.reduce((obj, key) => { 
    const newElement = {[key]: data[key]};
    //obj[key] = data[key];
    return {...obj, ...newElement};
    }, {});
  console.log(filteredData);

  return (
    <div className="home-container">
      <div className="header-style">
        <span>
          <BsGraphUp color="blue" size="200px" />
        </span>
        <div className="element-text-style">
          <h2>{data.companyName}</h2>
          <span>
            $
            {data.price}
          </span>
        </div>
      </div>
      <h4>COMPANY STOCK BREAKDOWN</h4>
      <div>
        { Object.keys(filteredData).map((key) => (
          <div key={key} className="details-data">
            <h3>
              {key}
              :
              {' '}
            </h3>
            <div className="details-text">
              <span>{filteredData[key]}</span>
              <span><RiArrowRightCircleLine size="30px" color="blue" /></span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};
export default Details;
