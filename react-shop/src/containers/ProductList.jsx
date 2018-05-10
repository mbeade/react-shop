
import React from 'react';
import { render } from 'react-dom';
import GridComponent from '../components/grid/GridComponent';
import styles from './Products.css';

export default class ProductList extends React.Component {

    constructor(props) {
        super(props);
        this.getProduct = this.getProduct.bind(this);
    }

    getProduct() {
        if (this.props.catId !== "-1") {
            return this.props.products.filter((p) => {
                return p.categoryId == this.props.catId;
            });
        } else {
            return this.props.products;
        }
    }

    render() {
        return <div >
            <div className={styles.wrapper}>
                <div className={styles.grid}>
                    <GridComponent products={this.getProduct()}></GridComponent>
                </div>
            </div>
        </div>
    }
}
