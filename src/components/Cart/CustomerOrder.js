import { useContext } from 'react'
import { CartContext } from './../../context/CartContext'
import CustomerOrderItem from "./CustomerOrderItem";
import CartPrice from './CartPrice'

function CustomerOrder(){
  const cart = useContext(CartContext);
  
  return (
  <div className="sm:w-2/3 md:w-1/2 lg:w-1/3 bg-grey-light mt-8 lg:mt-0">
    <div className="p-8">
      <h4 className="font-hkbold text-secondary text-2xl pb-3 text-center sm:text-left">
      Your Order</h4>
      <p className="font-hkbold text-secondary uppercase text-center sm:text-left">
      PRODUCTS</p>
      <div className="mt-5 mb-8">
        {cart.items && cart.items.map((product, key) => <CustomerOrderItem product={product} key={key}/>)}
      </div>
      <p className="font-hkbold text-secondary pt-1 pb-2">Cart Totals</p>
      <CartPrice />
    </div>
  </div>
)}

CustomerOrder.defaultProps = {
}

CustomerOrder.propTypes = {
};

export default CustomerOrder
