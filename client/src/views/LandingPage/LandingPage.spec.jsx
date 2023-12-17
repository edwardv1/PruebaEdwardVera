import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import LandingPage from './LandingPage';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("< LandingPage />", () => {
    test('renders DataTable heading h1', () => {
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
    
    test('renders Metrics body h1', () => {
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
      const headingElement = getByText('Metrics');
      expect(headingElement).toBeInTheDocument();
    });
    
    test('renders DataTable and Metrics Components', () => {
      const store = mockStore({
        product: {
          messageCreatedOrUpdated: null,
          messageDeleted: null,
        },
      });
      render(
        <Provider store={store}>
          <LandingPage />
        </Provider>
      );
  
      const dataTableComponent = screen.getByTestId('dataTableTestId');
      expect(dataTableComponent).toBeInTheDocument();
  
      const metricsComponent = screen.getByTestId('metricsTestId');
      expect(metricsComponent).toBeInTheDocument();
    });
})
