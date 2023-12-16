import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import LandingPage from './LandingPage';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("< LandingPage />", () => {
    test('renders DataTable heading', () => {
      // InitialState mockeado del mockStore necesario para las pruebas
      const store = mockStore({
        product: {
          messageCreatedOrUpdated: null,
          messageDeleted: null,
        },
      });
      const { getByText } = render(
        <Provider store={store}>
          <LandingPage />
        </Provider>
      );
      const headingElement = getByText('DataTable');
      expect(headingElement).toBeInTheDocument();
    });
})


// const { render, screen } = require('@testing-library/react');
// const LandingPage = require('./LandingPage');

  // test('renders DataTable heading', () => {
      
    //   render(<LandingPage />);
    
    //   const headingElement = screen.getByText('DataTable');
    
    //   expect(headingElement).toBeInTheDocument();
    // });