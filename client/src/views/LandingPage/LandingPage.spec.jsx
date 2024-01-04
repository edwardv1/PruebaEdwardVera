import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import LandingPage from './LandingPage';
import userEvent from '@testing-library/user-event';

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

    test('hide Modal component when Create button is clicked and show the success message', async () => { 
      const store = mockStore({
          product: {
              allProducts: [],
              messageCreatedOrUpdated: "The product has been created.",
          },
      });
      render(
          <Provider store={store}>
              <LandingPage />
          </Provider>
      );

      // Simula hacer click en el botón + News y verificar que el modal esté presente
      fireEvent.click(screen.getByText('+ New'));
      expect(screen.getByTestId('modalTestId')).toBeInTheDocument()

      // Modificar el estado input para tener datos válidos (mockeados) y poder habilitar el boton "Create"
      fireEvent.change(screen.getByPlaceholderText('Enter a name...'), { target: { value: 'Product Name' } });
      fireEvent.change(screen.getByPlaceholderText('Enter an URL...'), { target: { value: 'https://p7.hiclipart.com/preview/701/897/254/jotaro-kujo-josuke-higashikata-dio-brando-jojo-s-bizarre-adventure-diamond-is-unbreakable-others.jpg' } });
      fireEvent.change(screen.getByPlaceholderText('Enter a category...'), { target: { value: 'Anime' } });
      fireEvent.change(screen.getByPlaceholderText('Enter a price...'), { target: { value: '45' } });
      fireEvent.change(screen.getByPlaceholderText('Enter a reviews rating...'), { target: { value: '3' } });
      fireEvent.change(screen.getByPlaceholderText('Enter a description here...'), { target: { value: 'Anime character' } });

      //Hacer click en el botón Create y verificar que el modal se oculta
      userEvent.click(screen.getByTestId('buttonCreate'));
      await waitFor(async () => {
          await expect(screen.getByText("The product has been created.")).toBeInTheDocument();
          expect(screen.queryByTestId('modalTestId')).not.toBeInTheDocument();
      });
  })
})
