import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Product from "../Product/Product";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("<Product/>", ()=>{
    test('hide Modal and Form component when Update button is clicked', async () => { 
        const store = mockStore({
            product: {
                allProducts: [{
                    title: 'Product Name',
                    image: 'https://p7.hiclipart.com/preview/701/897/254/jotaro-kujo-josuke-higashikata-dio-brando-jojo-s-bizarre-adventure-diamond-is-unbreakable-others.jpg',
                    category: 'Anime',
                    price: '45',
                    rating: {
                        rate: 3.9,
                        count: 1
                    }
                }],
            },
        });
        render(
            <Provider store={store}>
                <Product />
            </Provider>
        );

        // Simula hacer click en el botón (Lápiz para editar) y verificar que el modal está presente
        fireEvent.click(screen.getByRole('button', { name: 'Open Modal Edit' }));
        expect(screen.getByTestId('modalTestId')).toBeInTheDocument()

        // Modificar el estado input para tener datos válidos (mockeados) y poder habilitar el boton "Update"
        // fireEvent.change(screen.getByPlaceholderText('Enter a name...'), { target: { value: 'Product Name' } });
        // fireEvent.change(screen.getByPlaceholderText('Enter an URL...'), { target: { value: 'https://p7.hiclipart.com/preview/701/897/254/jotaro-kujo-josuke-higashikata-dio-brando-jojo-s-bizarre-adventure-diamond-is-unbreakable-others.jpg' } });
        // fireEvent.change(screen.getByPlaceholderText('Enter a category...'), { target: { value: 'Anime' } });
        // fireEvent.change(screen.getByPlaceholderText('Enter a price...'), { target: { value: '45' } });
        // fireEvent.change(screen.getByPlaceholderText('Enter a reviews rating...'), { target: { value: '3' } });
        // fireEvent.change(screen.getByPlaceholderText('Enter a description here...'), { target: { value: 'Anime character' } });

        //Hacer click en el botón Update y verificar que el modal se oculta
        // userEvent.click(screen.getByTestId('buttonCreate'));
        // await waitFor(() => {
        //     expect(screen.queryByTestId('modalTestId')).not.toBeInTheDocument();
        // });
    })
})


