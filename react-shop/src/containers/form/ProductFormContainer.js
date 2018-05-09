import React from 'react';
import { render } from 'react-dom';
import styles from './ProductFormContainer.css';

export default class ProductFormContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            price: '',
            availability: false,
            image: '',
            categoryId: '',
            error: ''
        }
    }

    handleSubmit = (event) => {

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
        return <form name="productForm" onSubmit={this.handleSubmit}>
            {this.state.error ? <h3>{this.state.error}</h3> : null}
            <input type="text" name="name" value={this.state.name} placeholder="Nombre" onChange={this.onChangeInput} />
            <input type="text" name="description" value={this.state.description} placeholder="Descripcion" onChange={this.onChangeInput} />
            <input type="text" name="price" value={this.state.price} placeholder="Precio" onChange={this.onChangeInput} />
            <label>
                Disponible:
            <input id="availability" type="checkbox" name="availability" value={this.state.availability} />
            </label>
            <input type="text" name="image" value={this.state.image} placeholder="Imagen" onChange={this.onChangeInput} />
            <select name="categoryId" form="productForm">
                {
                    this.props.categories.map((cat) => {
                        return <option key={cat.id} value={cat.id}>{cat.name}</option>
                    })
                }
            </select>
        </form>
    }
}
