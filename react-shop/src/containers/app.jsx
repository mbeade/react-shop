
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import HomeComponent from './home'

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // magia para que funcione la extensión de redux del google Chrome.
);

export default class Application extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Provider store={store}>
            <BrowserRouter>
                <HomeComponent />
            </BrowserRouter>
        </Provider>
    }
}
