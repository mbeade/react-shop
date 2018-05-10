
import React from 'react';
import { render } from 'react-dom';
import ProductFormContainer from './form/ProductFormContainer';
import { Link, Switch, Route } from 'react-router-dom';
import ProductList from './ProductList';
import Content from './content';
import styles from './dashboard.css';
import axios from 'axios';
import Categories from '../components/categories/CategoriesComponent';

export default class Dashboard extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            categories: []
        };
        this.filterCategory = 1;
    }

    render() {
        return <div className={styles.wrapper}>

            <div className={styles.sidebar}>
                <div className={styles.sidebarTitle}>React Shop</div>

                <Route exact path="/products" render={() =>
                    <Categories categories={this.state.categories} filterCategory={this.filterCategory}></Categories>
                } />


                <div>
                    <Link to={`/products/new`}>Add new products</Link>
                    <br></br>
                    <Link to={`/products`}>List Products</Link>
                </div>
            </div>

            <div className={styles.grid}>
                <Route exact path="/products/new" render={() => <ProductFormContainer categories={this.state.categories} />} />
                <Route exact path="/products" render={() => <ProductList />} />
            </div>


        </div >
    }

    componentDidMount() {
        this.setState({ loading: true });
        this.getCategories().then((response) => {
            this.setState({
                categories: response.data
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    getCategories = () => {
        return axios.get('http://develop.plataforma5.la:3000/api/categories');
    }
}
