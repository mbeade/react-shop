import React from 'react';
import { render } from 'react-dom';
import Item from '../product/ItemComponent';

const GridComponent = ({ products }) => {
    return <div>{
        products.map((product) => {
            return <Item key={product.id} product={product}></Item>
        })
    }</div>
}

export default GridComponent;