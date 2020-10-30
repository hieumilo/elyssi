import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const CustomerOrder = () => (
  <div className="sm:w-2/3 md:w-1/2 lg:w-1/3 bg-grey-light mt-8 lg:mt-0">
    <div className="p-8">
      <h4 className="font-hkbold text-secondary text-2xl pb-3 text-center sm:text-left">
        Your Order</h4>
      <p className="font-hkbold text-secondary uppercase text-center sm:text-left">
        PRODUCTS</p>
      <div className="mt-5 mb-8">
        <div className="flex items-center mb-5">
          <div className="w-20 relative mr-3 sm:pr-0">
            <div className="h-20 rounded flex items-center justify-center">
              <div className="w-12 h-16 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url(https://elyssi.tailwindmade.com/assets/img/unlicensed/purse-1.png)" }}>
              </div>
              <span className="font-hkregular text-white text-xs px-2 leading-none absolute top-0 right-0 bg-primary flex items-center justify-center rounded-full -mt-2 -mr-2 h-6 w-6">2</span>
            </div>
          </div>
          <p className="font-hkregular text-secondary text-lg">Beautiful Brown
            </p>
        </div>
        <div className="flex items-center mb-5">
          <div className="w-20 relative mr-3 sm:pr-0">
            <div className="h-20 rounded flex items-center justify-center">
              <div className="w-12 h-16 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url(https://elyssi.tailwindmade.com/assets/img/unlicensed/purse-1.png)" }}>
              </div>
              <span className="font-hkregular text-white text-xs px-2 leading-none absolute top-0 right-0 bg-primary flex items-center justify-center rounded-full -mt-2 -mr-2 h-6 w-6">2</span>
            </div>
          </div>
          <p className="font-hkregular text-secondary text-lg">Beautiful Brown
            </p>
        </div>
        <div className="flex items-center mb-5">
          <div className="w-20 relative mr-3 sm:pr-0">
            <div className="h-20 rounded flex items-center justify-center">
              <div className="w-12 h-16 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url(https://elyssi.tailwindmade.com/assets/img/unlicensed/purse-1.png)" }}>
              </div>
              <span className="font-hkregular text-white text-xs px-2 leading-none absolute top-0 right-0 bg-primary flex items-center justify-center rounded-full -mt-2 -mr-2 h-6 w-6">2</span>
            </div>
          </div>
          <p className="font-hkregular text-secondary text-lg">Beautiful Brown
            </p>
        </div>
        <div className="flex items-center mb-5">
          <div className="w-20 relative mr-3 sm:pr-0">
            <div className="h-20 rounded flex items-center justify-center">
              <div className="w-12 h-16 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url(https://elyssi.tailwindmade.com/assets/img/unlicensed/purse-1.png)" }}>
              </div>
              <span className="font-hkregular text-white text-xs px-2 leading-none absolute top-0 right-0 bg-primary flex items-center justify-center rounded-full -mt-2 -mr-2 h-6 w-6">2</span>
            </div>
          </div>
          <p className="font-hkregular text-secondary text-lg">Beautiful Brown
            </p>
        </div>
        <div className="flex items-center mb-5">
          <div className="w-20 relative mr-3 sm:pr-0">
            <div className="h-20 rounded flex items-center justify-center">
              <div className="w-12 h-16 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url(https://elyssi.tailwindmade.com/assets/img/unlicensed/purse-1.png)" }}>
              </div>
              <span className="font-hkregular text-white text-xs px-2 leading-none absolute top-0 right-0 bg-primary flex items-center justify-center rounded-full -mt-2 -mr-2 h-6 w-6">2</span>
            </div>
          </div>
          <p className="font-hkregular text-secondary text-lg">Beautiful Brown
            </p>
        </div>
      </div>
      <p className="font-hkbold text-secondary pt-1 pb-2">Cart Totals</p>
      <div className="border-b border-grey-darker pb-1 flex justify-between">
        <span className="font-hkregular text-secondary">Subtotal</span>
        <span className="font-hkregular text-secondary">$236</span>
      </div>
      <div className="border-b border-grey-darker pt-2 pb-1 flex justify-between">
        <span className="font-hkregular text-secondary">Coupon apply</span>
        <span className="font-hkregular text-secondary">-$36</span>
      </div>
      <div className="pt-3 flex justify-between">
        <span className="font-hkbold text-secondary">Total</span>
        <span className="font-hkbold text-secondary">$200</span>
      </div>
    </div>

  </div>
)

CustomerOrder.defaultProps = {
}

CustomerOrder.propTypes = {

};

export default CustomerOrder
