
import React from 'react';
import { render } from 'react-dom';
import GridComponent from '../components/grid/GridComponent';
import axios from 'axios';
import Categories from '../components/categories/CategoriesComponent';
import styles from './AppContainer.css';
import ProductFormContainer from './form/ProductFormContainer';

export default class AppContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            categories: [],
            selectedCategory: -1,
            loading: false
        }
    }

    filterCategory = (idCategory) => {
        this.setState({
            selectedCategory: idCategory
        })
    }

    componentDidMount() {

        this.setState({ loading: true });

        Promise.all([this.getProducts(), this.getCategories()]).then((response) => {
            this.setState({
                products: response[0].data,
                loading: false,
                categories: response[1].data
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    getProducts = () => {
        return axios.get('http://develop.plataforma5.la:3000/api/products');
    }

    getCategories = () => {
        return axios.get('http://develop.plataforma5.la:3000/api/categories');
    }

    render() {
        console.log(styles)
        return <div >
            {this.state.loading ?
                <span>loading...</span>
                :
                <div className={styles.wrapper}>
                    <div className={styles.sidebar}>
                        <ProductFormContainer categories={this.state.categories} />
                        <Categories categories={this.state.categories} filterCategory={this.filterCategory}></Categories>
                    </div>
                    <div className={styles.grid}>
                        <GridComponent products={this.state.selectedCategory == -1 ? this.state.products : this.state.products.filter((prod) => prod.categoryId == this.state.selectedCategory)}></GridComponent>
                    </div>
                </div>
            }
        </div>
    }
}
