
import React from 'react';
import { render } from 'react-dom';
import ProductFormContainer from './form/ProductFormContainer';
import { Link, Switch, Route } from 'react-router-dom';
import ProductList from './ProductList';
import styles from './dashboard.css';
import axios from 'axios';
import Categories from '../components/categories/CategoriesComponent';
import * as actionsCreators from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => (
    {
        products: state.products.items,
        categories: state.products.categories
    });

const mapDispatch = (dispatch) => ({
    dispatchActions: {
        getProducts: (products) => { dispatch(actionsCreators.receiveProducts(products)) },
        getCategories: (categories) => { dispatch(actionsCreators.receiveCategories(categories)) }
    }
});

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.filterCategory = this.filterCategory.bind(this);
    }

    filterCategory(categoryId) {
        this.props.history.push(`/products?category=${categoryId}`)
    }

    render() {
        return <div className={styles.wrapper}>
            <div className={styles.sidebar}>
                <div className={styles.sidebarTitle}>React Shop</div>
                <Route exact path="/products" render={() => <Categories categories={this.props.categories} filterCategory={this.filterCategory}></Categories>} />
                <div>
                    <br></br>
                    <Link to={`/products/new`}>Add new products</Link>
                    <br></br>
                    <Link to={`/products`}>List Products</Link>
                </div>
            </div>

            <div className={styles.grid}>
                <Route exact path="/products/new" render={() => <ProductFormContainer categories={this.props.categories} />} />
                <Route exact path="/products" render={(props) =>
                    <ProductList products={this.props.products} catId={new URLSearchParams(this.props.location.search).get('category')} {...props} />
                } />
            </div>

        </div >
    }

    componentDidMount() {
        this.setState({ loading: true });
        Promise.all([this.getProducts(), this.getCategories()]).then((response) => {
            this.props.dispatchActions.getProducts(response[0].data);
            this.props.dispatchActions.getCategories(response[1].data);
        }).catch((error) => {
            console.log(error);
        });
    }

    getProducts = (catId) => {
        return axios.get(`http://develop.plataforma5.la:3000/api/products`);
    }

    getCategories = () => {
        return axios.get('http://develop.plataforma5.la:3000/api/categories');
    }
}


export default connect(mapStateToProps, mapDispatch)(Dashboard);