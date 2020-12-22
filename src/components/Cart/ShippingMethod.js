import {Link} from "react-router-dom";
import {Fragment} from "react";

function ShippingMethod() {
  return (
    <Fragment>
      <div className="mt-10 md:mt-12 border border-grey-darker rounded px-4 sm:px-5">
        <div className="flex justify-between py-2 border-b border-grey-dark">
          <div className="w-1/5">
            <p className="font-hkregular text-secondary">Contact</p>
          </div>
          <div className="w-3/5">
            <p className="font-hkregular text-secondary">
              test@gmail.com</p>
          </div>
          <div className="w-1/5 text-right">
            <a href="/cart/customer-info"
               className="font-hkregular text-primary underline">Change</a>
          </div>
        </div>
        <div className="flex justify-between py-2">
          <div className="w-1/5">
            <p className="font-hkregular text-secondary">Ship to</p>
          </div>
          <div className="w-3/5">
            <p className="font-hkregular text-secondary">
              10813 NW 30th St Suite 115 Doral, Florida 33192 USA
            </p>
          </div>
          <div className="w-1/5 text-right">
            <a href="/cart/customer-info"
               className="font-hkregular text-primary underline">Change</a>
          </div>
        </div>
      </div>
      <div className="pt-8 md:pt-10">
        <h1 className="font-hkmedium text-secondary text-xl md:text-2xl text-center sm:text-left">
          Shipping address
        </h1>
        <div className="mt-5 md:mt-6 border border-grey-darker rounded px-4 sm:px-5">
          <div className="flex justify-between border-b border-grey-dark py-2">
            <div className="flex items-center">
              <label htmlFor="shipping_international"
                   className="block relative h-0 w-0 overflow-hidden">International
                Shipping</label>
              <input type="checkbox" className="form-checkbox" id="shipping_international"/>
              <p className="ml-3 font-hkregular text-secondary">
                International Shipping</p>
            </div>
            <p className="font-hkregular uppercase text-secondary">
              $20</p>
          </div>
          <div className="flex justify-between py-2">
            <div className="flex items-center">
              <label htmlFor="shipping_normal" className="block relative h-0 w-0 overflow-hidden">Normal
                3 days delivery</label>
              <input type="checkbox" className="form-checkbox" id="shipping_normal"/>
              <p className="ml-3 font-hkregular text-secondary">
                Normal 3 days delivery</p>
            </div>
            <p className="font-hkregular uppercase text-secondary">FREE
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row justify-between items-center pt-8 sm:pt-12">
        <Link to="/cart"
            className="flex items-center  font-hkregular group-hover:font-hkbold text-sm text-secondary hover:text-primary group transition-colors">
          <i className="bx bx-chevron-left text-secondary group-hover:text-primary pr-2 text-xl transition-colors"></i>
          Return to Cart
        </Link>
        <Link to="/payment-method" className="btn btn-primary mb-3 sm:mb-0">
          Continue to payment method
        </Link>
      </div>
    </Fragment>
  );
}

ShippingMethod.propTypes = {}

export default ShippingMethod
