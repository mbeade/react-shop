import React from 'react';
import { render } from 'react-dom';
import styles from './ProductFormContainer.css';
import axios from 'axios';
import { Link, Switch, Route } from 'react-router-dom';
export default class ProductFormContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            price: '',
            availability: false,
            image: '',
            categoryId: ''
        }
        this.handleCategorySelection = this.handleCategorySelection.bind(this);
    }


    handleCategorySelection(event) {
        this.setState({
            categoryId: event.target.value
        });
    }

    handleSubmit = (event) => {
        // Fundamental
        event.preventDefault();
        axios.post('http://develop.plataforma5.la:3000/api/products', this.state, { headers: { 'Content-Type': 'application/json' } }).then((response) => {
            alert('Product saved successfuly!');
            this.setState({
                name: '',
                description: '',
                price: '',
                availability: false,
                image: '',
                categoryId: ''
            });
        }).catch(error => {
            console.log(`Error: ${error}`);
        });
    }

    onChangeInput = (event) => {
        let newState = {};
        if (event.target.name == 'price') {
            if (/^\d.*.*$/.test(event.target.value)) {
                this.setState({ price: event.target.value });
            }
        } else {
            newState[event.target.name] = event.target.value;
            this.setState(Object.assign({}, this.state, newState), () => console.log("status update", this.state))
        }
    }


    render() {
        return <div className={styles.formContainer}>
            <form name="productForm" onSubmit={this.handleSubmit}>
                <input type="text" name="name" value={this.state.name} placeholder="Nombre" onChange={this.onChangeInput} />
                <br></br>
                <br></br>
                <input type="text" name="description" value={this.state.description} placeholder="Descripcion" onChange={this.onChangeInput} />
                <br></br>
                <br></br>
                <input type="text" name="price" value={this.state.price} placeholder="Precio" onChange={this.onChangeInput} />
                <br></br>
                <br></br>
                <label>
                    Disponible:
                    <input id="availability" type="checkbox" name="availability" value={this.state.availability} />
                </label>
                <br></br>
                <br></br>
                <input type="text" name="image" value={this.state.image} placeholder="Imagen" onChange={this.onChangeInput} /><br></br>
                <br></br>
                <select name="categoryId" form="productForm" onChange={this.handleCategorySelection}>
                    {
                        this.props.categories.map((cat) => {
                            return <option key={cat.id} value={cat.id}>{cat.name}</option>
                        })
                    }
                </select>
                <br></br>
                <br></br>
                <button type="submit">Send</button>
            </form></div>
    }
}
