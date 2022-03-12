import renderer from 'react-test-renderer';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { RiArrowLeftSLine } from 'react-icons/ri';
import store from '../redux/configureStore';
import App from '../App';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Link is rendered', () => {
  const component = renderer.create(
    <Router>
      <Link to="/"><RiArrowLeftSLine size="35px" color="white" /></Link>
    </Router>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
