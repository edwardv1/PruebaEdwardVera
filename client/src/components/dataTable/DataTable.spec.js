import { render, screen } from "@testing-library/react";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import DataTable from "./DataTable";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("<DataTable />", ()=>{
    test('renders Header, Sections and Pagination Components', () => { 
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
    test('renders empty state when petition´s status is idle or loading', () => { 
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
    test('renders empty state when there isnt products in the array', () => { 
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