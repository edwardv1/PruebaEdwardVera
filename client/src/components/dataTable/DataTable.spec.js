import { render, screen } from "@testing-library/react";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import DataTable from "./DataTable";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("<DataTable />", ()=>{
    test('render Header, Sections and Pagination Components', () => { 
        const store = mockStore({
            product: {
                allProducts: [],
            },
        });
        render(
            <Provider store={store}>
                <DataTable />
            </Provider>
        );
        const headerComponent = screen.getByTestId('headerTestId');
        expect(headerComponent).toBeInTheDocument();
    
        const sectionsComponent = screen.getByTestId('sectionsTestId');
        expect(sectionsComponent).toBeInTheDocument();

        const paginationComponent = screen.getByTestId('paginationTestId');
        expect(paginationComponent).toBeInTheDocument();
    })
    test('render Product Component', () => { 
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
                <DataTable />
            </Provider>
        );
        const productComponent = screen.getByTestId('productTestId');
        expect(productComponent).toBeInTheDocument();
    })
    test('render empty state when petition´s status is idle or loading', () => { 
        const store = mockStore({
            product: {
                status: "loading"
            },
        });
        render(
            <Provider store={store}>
                <DataTable />
            </Provider>
        );
        
        const loadingText = screen.getByText("Loading...");
        expect(loadingText).toBeInTheDocument();
    })
    test('render empty state when there isnt products in the array', () => { 
        const store = mockStore({
            product: {
                statusProduct: "success",
                allProducts: [], 
            },
        });
        render(
            <Provider store={store}>
                <DataTable />
            </Provider>
        );
        
        const emptyText = screen.getByText("The data table is empty");
        expect(emptyText).toBeInTheDocument();
    })
})