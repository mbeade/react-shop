
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const RECEIVE_CART = 'RECEIVE_CART';

export function receiveProducts(products) {
    return {
        type: RECEIVE_PRODUCTS,
        products: products
    }
}

export function receiveCategories(categories) {
    return {
        type: RECEIVE_CATEGORIES,
        categories: categories
    }
}

export function addToCart(product) {
    return {
        type: ADD_TO_CART,
        product
    }
}
export function removeFromCart(index) {
    return {
        type: REMOVE_FROM_CART,
        index
    }
}
export function receiveCart(cart) {
    return {
        type: RECEIVE_CART,
        cart
    }
}