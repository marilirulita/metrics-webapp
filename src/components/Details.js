import { useLocation } from 'react-router-dom';
import { BsFileBarGraph } from 'react-icons/bs';

const Details = () => {
  const location = useLocation();
  const data = location.state;
  console.log(data);
  return (
    <div className="home-container">
      <div className="header-style">
        <span className="header-style-chil">
          <BsFileBarGraph color="blue" size="200px" />
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
    </div>
  );
};
export default Details;
