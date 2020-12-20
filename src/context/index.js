import React, {createContext} from 'react'
import {CartProvider} from "./CartContext";

const {Consumer, Provider} = createContext()

function ContextProvider({children}) {
  return <Provider value={{}}>
    <CartProvider>
      {children}
    </CartProvider>
  </Provider>
}

export {ContextProvider, Consumer}
