import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Modal from "./Modal";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("<Modal />", ()=>{
    test('should first', () => { second })
})