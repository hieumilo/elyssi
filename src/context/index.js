import React, {createContext} from 'react'
import {CartProvider} from "./CartContext";
import {CheckoutProvider} from "./CheckoutContext";

const {Consumer, Provider} = createContext()

function ContextProvider({children}) {
  return <Provider value={{}}>
    <CartProvider>
      <CheckoutProvider>
        {children}
      </CheckoutProvider>
    </CartProvider>
  </Provider>
}

export {ContextProvider, Consumer}
