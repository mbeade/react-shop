
import React from 'react';
import { render } from 'react-dom';
import { Link, Switch, Route } from 'react-router-dom';

import Dashboard from './dashboard';

export default class HomeComponent extends React.Component {

    constructor(props) {
        super(props);
    
    }
    render() {
        return <div>
            <Route path='/' component={Dashboard} />
        </div>
    }

    
}
