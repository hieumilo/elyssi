import React, {createContext, useReducer} from 'react'

export const SET_CART = 'SET_CART';
export const ADD_PROMOTION = 'ADD_PROMOTION';
export const RESET_CART = 'RESET_CART';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const REMOVE_PROMOTION = 'REMOVE_PROMOTION';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const UPDATE_PRODUCT_QTY = 'UPDATE_PRODUCT_QTY';

export const initialState = {
    items: [],
    applied_coupons: {},
    total: 0,
};

export default function reducer(state, action) {
    const {product, qty, id} = action.payload;
    let items = [...state.items];
    let isExistProduct = false;

    function calcTotal(items) {
        return items.reduce(
            (accumulator, currentValue) => {
                return accumulator + (currentValue.qty * (currentValue.price_range?.maximum_price?.regular_price?.value || 0))
            },
            0
        )
    }

    switch (action.type) {
        case ADD_PRODUCT:
            items = items.map((item) => {
                if (product.id === item.id) {
                    isExistProduct = true;
                    return {
                        ...item,
                        qty: item.qty + qty
                    }
                }
                return item;
            })
            if (!isExistProduct) {
                items.push({...product, qty})
            }
            return {
                ...state,
                items,
                total: calcTotal(items),
            };
        case UPDATE_PRODUCT_QTY:
            items = items.map((item) => {
                if (id === item.id) {
                    return {
                        ...item,
                        qty: item.qty + qty
                    }
                }
                return item;
            })
            return {
                ...state,
                items,
                total: calcTotal(items),
            };
        case REMOVE_PRODUCT:
            items = items.map(item => item.id === id ? null : item).filter(e => e !== null);
            return {
                ...state,
                items: items,
                total: calcTotal(items),
            };
        default:
            return state
    }
}

let CartContext;

const {Provider, Consumer} = (CartContext = createContext());

function CartProvider({children, ...props}) {
    const [state, dispatch] = useReducer(reducer, initialState)
    async function addToCart(payload) {
        dispatch({type: ADD_PRODUCT, payload: payload});
    }

    async function removeFromCart(id) {
        dispatch({type: REMOVE_PRODUCT, payload: {id}});
    }

    async function updateQuantity(id, qty) {
        dispatch({type: UPDATE_PRODUCT_QTY, payload: {id, qty}});
    }


    return <Provider value={{
        ...state,
        addToCart,
        removeFromCart,
        updateQuantity,
    }}>
        {children}
    </Provider>
}


export {CartProvider, Consumer as CartConsumer, CartContext}
