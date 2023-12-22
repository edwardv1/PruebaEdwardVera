import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Header from "./Header";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("<Header/>", ()=> {
    test('renders the header text and button for showing modal to create a new product', () => { 
        const store = mockStore({
            product: {
                allProducts: [],
            },
        });
        render(
            <Provider store={store}>
                <Header />
            </Provider>
        );
        const headerText = screen.getByText("Manage Products");
        // const headerText = screen.getByText(/Manage Products/i);
        expect(headerText).toBeInTheDocument();

        const buttonOpenModal = screen.getByRole("button");
        expect(buttonOpenModal).toBeInTheDocument();
    })
    test('renders Modal and Form components when + New button is clicked', () => { 
        const store = mockStore({
            product: {
                allProducts: [],
            },
        });
        render(
            <Provider store={store}>
                <Header />
            </Provider>
        );
        const modalComponent = screen.queryByTestId('modalTestId') //Uso query ya que espero que el componente no este presente en el DOM

        // Verifica que el modal no está presente inicialmente
        expect(modalComponent).toBeNull();

        // Simula hacer click en el botón + News
        fireEvent.click(screen.getByText('+ New'));

        // Obtiene la referencia al componente modal y form después de hacer click
        const modalComponentAfterClick = screen.getByTestId('modalTestId');
        const formComponent = screen.getByTestId('formTestId');
        
        // Verifica que el modal y el form se haya renderizado después de hacer click
        expect(modalComponentAfterClick).toBeInTheDocument();
        expect(formComponent).toBeInTheDocument();  
    })
    test('hide Modal and Form component when Cancel button is clicked', async () => { 
        const store = mockStore({
            product: {
                allProducts: [],
            },
        });
        render(
            <Provider store={store}>
                <Header />
            </Provider>
        );
        
        // Simula hacer click en el botón + News y verificar que el modal está presente
        fireEvent.click(screen.getByText('+ New'));
        expect(screen.getByTestId('modalTestId')).toBeInTheDocument()

        // Hacer click en el botón Cancel y verificar que el modal se oculta
        userEvent.click(screen.getByTestId('buttonCancel'));
        await waitFor(() => {
            expect(screen.queryByTestId('modalTestId')).not.toBeInTheDocument();
        });
    })
    test('hide Modal and Form component when Create button is clicked', async () => { 
        const store = mockStore({
            product: {
                allProducts: [],
            },
        });
        render(
            <Provider store={store}>
                <Header />
            </Provider>
        );

        // Simula hacer click en el botón + News y verificar que el modal está presente
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
        await waitFor(() => {
            expect(screen.queryByTestId('modalTestId')).not.toBeInTheDocument();
        });
    })
})
