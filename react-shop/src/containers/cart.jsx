
import React from 'react';
import { render } from 'react-dom';


export default class ProductList extends React.Component {

    constructor(props) {
        super(props);
       
    }

    render() {
        return <h1>Cart: {this.props.items}</h1>
    }
}
