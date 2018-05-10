import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions'
const initialState = {
    items: [],
};

function cart(state = initialState, action) {
    const elem = state.items.findIndex(elem => elem.productId === action.productId);
    switch (action.type) {
        case ADD_TO_CART:
            if (elem === -1) {
                return {
                    ...state,
                    items: [...state.items, {
                        product: action.product,
                        quantity: 1,
                    }],
                };
            }
            return {
                items: [...state.items.slice(0, elem),
                {
                    product: action.product,
                    quantity: state.items[elem].quantity + 1,
                },
                ...state.items.slice(elem),
                ],
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                items: [...state.items.slice(0, action.index), ...state.items.slice(action.index + 1)],
            }
        default:
            return state;
    }
}
export default cart;