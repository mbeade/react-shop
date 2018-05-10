
import React from 'react';
import { render } from 'react-dom';
import { Route, Redirect } from 'react-router-dom';
import Dashboard from './dashboard';

export default class HomeComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <Redirect to='/products' />
            <Route path='/' component={Dashboard} />
        </div>
    }
}
