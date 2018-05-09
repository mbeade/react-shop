
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import HomeComponent from './home'

export default class Application extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return <BrowserRouter>
            <HomeComponent />
        </BrowserRouter>
    }
}
