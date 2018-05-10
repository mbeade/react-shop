import { RECEIVE_PRODUCTS, RECEIVE_CATEGORIES } from '../actions';

const initialState = {
    items: [],
    categories: [],
    isLoading: false,
};

function products(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return {
                ...state,
                items: action.products,
                isLoading: false,
            }
        case RECEIVE_CATEGORIES:
            return {
                ...state,
                categories: action.categories,
                isLoading: false,
            }
        default:
            return state
    }
}

export default products;