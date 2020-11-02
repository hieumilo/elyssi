import {Link} from "react-router-dom";

const CartTotal = () => (
  <div className="sm:w-2/3 md:w-full lg:w-1/3 mx-auto lg:mx-0 mt-16 lg:mt-0">

    <div className="bg-grey-light py-8 px-8">
      <h4 className="font-hkbold text-secondary text-2xl pb-3 text-center sm:text-left">
        Cart Totals</h4>
      <div>
        <p className="font-hkbold text-secondary pt-1 pb-2">Cart Note
        </p>
        <p className="font-hkregular text-secondary text-sm pb-4">
          Special instructions for us</p>
        <label htmlFor="cart_note" className="block relative h-0 w-0 overflow-hidden">Cart
          Note</label>
        <textarea rows="5" placeholder="Enter your text" className="form-textarea" id="cart_note"></textarea>
      </div>
      <div className="pt-4">
        <p className="font-hkbold text-secondary pt-1 pb-4">Add Coupon
        </p>
        <div className="flex justify-between">
          <label htmlFor="discount_code" className="block relative h-0 w-0 overflow-hidden">Discount
            Code</label>
          <input type="text" placeholder="Discount code" className="w-3/5 xl:w-2/3 form-input"
               id="discount_code"/>
          <button className="w-2/5 xl:w-1/3 ml-4 lg:ml-2 xl:ml-4 btn btn-outline btn-sm"
              aria-label="Apply button">Apply
          </button>
        </div>
      </div>
      <div className="mb-12 pt-4">
        <p className="font-hkbold text-secondary pt-1 pb-2">Cart Total
        </p>
        <div className="border-b border-grey-darker pb-1 flex justify-between">
          <span className="font-hkregular text-secondary">Subtotal</span>
          <span className="font-hkregular text-secondary">$236</span>
        </div>
        <div className="border-b border-grey-darker pt-2 pb-1 flex justify-between">
                  <span className="font-hkregular text-secondary">Coupon
                  applied</span>
          <span className="font-hkregular text-secondary">-$36</span>
        </div>
        <div className="pt-3 flex justify-between">
          <span className="font-hkbold text-secondary">Total</span>
          <span className="font-hkbold text-secondary">$200</span>
        </div>
      </div>
      <Link to="/customer-info" className="btn btn-primary w-full">Proceed to checkout</Link>

    </div>

  </div>
)

CartTotal.defaultProps = {}

CartTotal.propTypes = {};

export default CartTotal
