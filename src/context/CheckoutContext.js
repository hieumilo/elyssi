import React, {createContext, useReducer} from 'react'
// import {CartContext, RESET_CART} from "./CartContext";
// import {MagentoContext} from "./index";

// const ADD_SHIPPING_ADDRESS = 'ADD_SHIPPING_ADDRESS';
// const UPDATE_CUSTOMER = 'UPDATE_CUSTOMER';
// const UPDATE_SHIPPING_METHOD = 'UPDATE_SHIPPING_METHOD';
// const UPDATE_PAYMENT_METHOD = 'UPDATE_PAYMENT_METHOD';
// const ADD_BILLING_ADDRESS = 'ADD_BILLING_ADDRESS';
// const PLACE_ORDER = 'PLACE_ORDER';
// const SET_BRAINTREE_TOKEN = 'SET_BRAINTREE_TOKEN';

let CheckoutContext;

export const initialState = {
};
export default function reducer(state, action) {

    switch (action.type) {
        default:
            return state;
    }
};

const {Provider, Consumer} = (CheckoutContext = createContext());

function CheckoutProvider({children}) {
    const [state] = useReducer(reducer, initialState);

    return <Provider value={{
        ...state,
    }}>
        {children}
    </Provider>
}

export {CheckoutProvider, Consumer as CheckoutConsumer, CheckoutContext}
