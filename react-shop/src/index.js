import React from 'react';
import { render } from 'react-dom';
import AppContainer from './containers/AppContainer';

class HelloWorldComponent extends React.Component {
    render() {
        return <h1>Hello world</h1>
    }
}

// render(<HelloWorldComponent />, document.getElementById('app'));
render(<AppContainer/>, document.getElementById('app'));