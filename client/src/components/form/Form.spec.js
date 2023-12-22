import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Form from "./Form";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("<Form />", ()=>{
    test('renders Form component when + New button is clicked', () => { 
        const store = mockStore({
            product: {
                allProducts: [],
            },
        });
        render(
            <Provider store={store}>
                <Form />
            </Provider>
        );
        const modalComponent = screen.queryByTestId('modalTestId') //Uso query ya que espero que el componente no este presente en el DOM

        // Verifica que el modal no está presente inicialmente
        expect(modalComponent).toBeNull();

        // Simula hacer click en el botón + News
        fireEvent.click(screen.getByText('+ New'));

        // Obtiene la referencia al componente modal después de hacer clic
        const modalComponentAfterClick = screen.getByTestId('modalTestId');
        
        // Verifica que el modal se haya renderizado después de hacer click
        expect(modalComponentAfterClick).toBeInTheDocument();  
    })
})