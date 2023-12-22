import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Product from "../Product/Product";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("<Product/>", ()=>{
    test('render all product data', async () => { 
        const store = mockStore({
            product: {
                allProducts: [{
                    category: "Pokemon",
                    description: "Pokemon toy",
                    id: "58c54b69-e623-4f92-80aa-184aaa61ce7f",
                    image: "https://toppng.com/uploads/preview/mega-ho-pokemon-ho-oh-mega-evolutio-11563223813t4zspwbv64.png",
                    price: 45,
                    rating: {
                        count: 1,
                        rate: 4
                    },
                    title: "JoHo"
                }],
            },
        });
        render(
            <Provider store={store}>
                <Product product={{
                    category: "Pokemon",
                    description: "Pokemon toy",
                    id: "58c54b69-e623-4f92-80aa-184aaa61ce7f",
                    image: "https://toppng.com/uploads/preview/mega-ho-pokemon-ho-oh-mega-evolutio-11563223813t4zspwbv64.png",
                    price: 45,
                    rating: {
                        count: 1,
                        rate: 4
                    },
                    title: "JoHo"
                }}/>
            </Provider>
        );
        
        //Controlo que Product este en el DOM
        const productComponent = screen.getByTestId('productTestId');
        expect(productComponent).toBeInTheDocument();

        //Controlo que toda la información del Producto se renderice
        //?Decidir si es necesario añadir controles sobre los datos que se renderizan
        expect(screen.getByTestId('productId')).toBeInTheDocument();
        expect(screen.getByTestId('productTitle')).toBeInTheDocument();
        expect(screen.getByTestId('productImage')).toBeInTheDocument();
        expect(screen.getByTestId('productCategory')).toBeInTheDocument();
        expect(screen.getByTestId('productPrice')).toBeInTheDocument();
        expect(screen.getByTestId('productReview')).toBeInTheDocument();
        
        //Controlo que se renderice el boton que abre el modal de Editar y Eliminar el producto
        expect(screen.getByTestId('buttonOpenModalEdit')).toBeInTheDocument();
        expect(screen.getByTestId('buttonOpenModalDelete')).toBeInTheDocument();
    })
    test('open Modal component and than hide it when Update button is clicked', async () => { 
        const store = mockStore({
            product: {
                allProducts: [{
                    category: "Pokemon",
                    description: "Pokemon toy",
                    id: "58c54b69-e623-4f92-80aa-184aaa61ce7f",
                    image: "https://toppng.com/uploads/preview/mega-ho-pokemon-ho-oh-mega-evolutio-11563223813t4zspwbv64.png",
                    price: 45,
                    rating: {
                        count: 1,
                        rate: 4
                    },
                    title: "JoHo"
                }],
            },
        });
        render(
            <Provider store={store}>
                <Product product={{
                    category: "Pokemon",
                    description: "Pokemon toy",
                    id: "58c54b69-e623-4f92-80aa-184aaa61ce7f",
                    image: "https://toppng.com/uploads/preview/mega-ho-pokemon-ho-oh-mega-evolutio-11563223813t4zspwbv64.png",
                    price: 45,
                    rating: {
                        count: 1,
                        rate: 4
                    },
                    title: "JoHo"
                }}/>
            </Provider>
        )

        // Simula hacer click en el botón (Lápiz para editar) y verificar que el modal está presente
        fireEvent.click(screen.getByTestId('buttonOpenModalEdit'));
        expect(screen.getByTestId('modalTestId')).toBeInTheDocument()

        // Modificar el estado input para tener datos válidos (mockeados) y poder habilitar el boton "Update"
        fireEvent.change(screen.getByPlaceholderText('Enter a name...'), { target: { value: 'Jotaru Koju' } });
        fireEvent.change(screen.getByPlaceholderText('Enter an URL...'), { target: { value: 'https://p7.hiclipart.com/preview/701/897/254/jotaro-kujo-josuke-higashikata-dio-brando-jojo-s-bizarre-adventure-diamond-is-unbreakable-others.jpg' } });
        fireEvent.change(screen.getByPlaceholderText('Enter a category...'), { target: { value: 'Anime' } });
        fireEvent.change(screen.getByPlaceholderText('Enter a price...'), { target: { value: '45' } });
        fireEvent.change(screen.getByPlaceholderText('Enter a reviews rating...'), { target: { value: '3' } });
        fireEvent.change(screen.getByPlaceholderText('Enter a description here...'), { target: { value: 'Anime character' } });

        //Hacer click en el botón Update y verificar que el modal se oculta
        userEvent.click(screen.getByTestId('buttonUpdate'));
        await waitFor(() => {
            expect(screen.queryByTestId('modalTestId')).not.toBeInTheDocument();
        });
    })
    test('open ModalDelete component and than hide it when Cancel or Delete button are clicked', async () => { 
        const store = mockStore({
            product: {
                allProducts: [{
                    category: "Pokemon",
                    description: "Pokemon toy",
                    id: "58c54b69-e623-4f92-80aa-184aaa61ce7f",
                    image: "https://toppng.com/uploads/preview/mega-ho-pokemon-ho-oh-mega-evolutio-11563223813t4zspwbv64.png",
                    price: 45,
                    rating: {
                        count: 1,
                        rate: 4
                    },
                    title: "JoHo"
                }],
            },
        });
        render(
            <Provider store={store}>
                <Product product={store.getState().product.allProducts[0]}/>
            </Provider>
        )

        // Simula hacer click en el botón (Basura para eliminar) y verificar que el modal esté presente
        fireEvent.click(screen.getByTestId('buttonOpenModalDelete'));
        expect(screen.getByTestId('modalDeleteTestId')).toBeInTheDocument()
        expect(screen.getByTitle('Delete')).toBeInTheDocument()
        expect(screen.getByTestId('buttonCancel')).toBeInTheDocument()
        expect(screen.getByTestId('buttonDelete')).toBeInTheDocument()


        //Hacer click en el botón Cancel y verificar que el modal se oculta
        userEvent.click(screen.getByTestId('buttonCancel'));
        await waitFor(() => {
            expect(screen.queryByTestId('modalDeleteTestId')).not.toBeInTheDocument();
        });

        //Repito el flujo, pero ahora con el boton Delete, agregando verificación del producto eliminado
        fireEvent.click(screen.getByTestId('buttonOpenModalDelete'));
        expect(screen.getByTestId('modalDeleteTestId')).toBeInTheDocument()

        userEvent.click(screen.getByTestId('buttonDelete'));

        //? Simular la acción de eliminación del producto (Pendiente)
        //store.dispatch(deleteProduct('58c54b69-e623-4f92-80aa-184aaa61ce7f'));
        await waitFor(() => {
            //? Verificar que el producto se eliminó correctamente (Pendiente)
            //expect(screen.queryByTestId('productTitle')).not.toBeInTheDocument();
            expect(screen.queryByTestId('modalDeleteTestId')).not.toBeInTheDocument();
        });    
    })
})