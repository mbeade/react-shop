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
    }

    handleSubmit = (event) => {
        console.log(`${JSON.stringify(this.state)}`);
        axios.post('http://develop.plataforma5.la:3000/api/products',
            this.state).then((response) => {
                console.log(response);
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
            newState[event.target.name] = newState[event.target.value]
            this.setState(newState, () => console.log("status update", this.state))
        }
    }


    render() {
        return <div className={styles.formContainer}>
            <h1>Add new products</h1>
            <Link to={`/`}>Back</Link>

            <form name="productForm" onSubmit={this.handleSubmit}>
                <input type="text" name="name" value={this.state.name} placeholder="Nombre" onChange={this.onChangeInput} />
                <input type="text" name="description" value={this.state.description} placeholder="Descripcion" onChange={this.onChangeInput} />
                <input type="text" name="price" value={this.state.price} placeholder="Precio" onChange={this.onChangeInput} />
                <br></br>
                <label>
                    Disponible:
            <input id="availability" type="checkbox" name="availability" value={this.state.availability} />
                </label>
                <br></br>
                <input type="text" name="image" value={this.state.image} placeholder="Imagen" onChange={this.onChangeInput} /><br></br>
                <select name="categoryId" form="productForm">
                    {
                        this.props.categories.map((cat) => {
                            return <option key={cat.id} value={cat.id}>{cat.name}</option>
                        })
                    }
                </select>
                <button type="submit">Send</button>
            </form></div>
    }
}
