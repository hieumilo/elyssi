import { CartContext } from './../../context/CartContext'
import { Fragment, useContext } from 'react';

function CartPrice () {
  const cart = useContext(CartContext);

  return (
    <Fragment>
      <div className="border-b border-grey-darker pb-1 flex justify-between">
        <span className="font-hkregular text-secondary">Subtotal</span>
        <span className="font-hkregular text-secondary">${cart.total}</span>
      </div>
      <div className="border-b border-grey-darker pt-2 pb-1 flex justify-between">
        <span className="font-hkregular text-secondary">
          Coupon applied
        </span>
        <span className="font-hkregular text-secondary">$0</span>
      </div>
      <div className="pt-3 flex justify-between">
        <span className="font-hkbold text-secondary">Total</span>
        <span className="font-hkbold text-secondary">${cart.total}</span>
      </div>
    </Fragment>
  )
}

CartPrice.defaultProps = {}

CartPrice.propTypes = {};

export default CartPrice
