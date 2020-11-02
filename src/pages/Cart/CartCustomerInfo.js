import CustomerOrder from '../../components/Cart/CustomerOrder'
import {Link} from "react-router-dom";
import CartBreadCrumb from './../../components/Cart/CartBreadCrumb'

function CartCustomerInfo() {
  return (
    <div className="container border-t border-grey-dark">
      <div
        className="flex flex-col lg:flex-row justify-between items-center pt-10 sm:pt-12 pb-16 sm:pb-20 lg:pb-24">

        <div className="lg:w-2/3 lg:pr-16 xl:pr-20">

          <CartBreadCrumb/>

          <div className="pt-10 md:pt-12">
            <div className="flex flex-col-reverse sm:flex-row items-center justify-between">
              <h1 className="font-hkmedium text-secondary text-xl md:text-2xl">
                Contact information
              </h1>
              <p className="font-hkrehular text-secondary">
                Already have an account?
                <a href="/login" className="font-hkbold text-primary">Log in</a>
              </p>
            </div>
            <div className="pt-4 md:pt-5">
              <label for="email" className="block relative h-0 w-0 overflow-hidden">Email</label>
              <input type="email" placeholder="Enter your email address" className="form-input"
                   id="email"/>
              <div className="flex items-center pt-4">
                <label for="offers" className="block relative h-0 w-0 overflow-hidden">Sign
                  up to exclusive offers</label>
                <input type="checkbox" className="form-checkbox" id="offers"/>
                <p className="font-hkregular text-sm pl-3 text-secondary">
                  Keep me up to date on news and exclusive offers
                </p>
              </div>
            </div>
          </div>
          <div className="pt-4 pb-10">
            <h4 className="font-hkmedium text-secondary text-xl md:text-2xl text-center sm:text-left">
              Shipping address
            </h4>
            <div className="pt-4 md:pt-5">
              <div className="flex justify-between">
                <label for="first_name" className="block relative h-0 w-0 overflow-hidden">First
                  Name</label>
                <input type="text" placeholder="First Name" className="form-input mb-4 sm:mb-5 mr-2"
                     id="first_name"/>
                <label for="last_name" className="block relative h-0 w-0 overflow-hidden">Last
                  Name</label>
                <input type="text" placeholder="Last Name" className="form-input mb-4 sm:mb-5 ml-1"
                     id="last_name"/>
              </div>
              <label for="address" className="block relative h-0 w-0 overflow-hidden">Address</label>
              <input type="text" placeholder="You address" className="form-input mb-4 sm:mb-5"
                   id="address"/>
              <label for="address2" className="block relative h-0 w-0 overflow-hidden">Address
                2</label>
              <input type="text" placeholder="Apartment, Suite, etc" className="form-input mb-4 sm:mb-5"
                   id="address2"/>
              <label for="city" className="block relative h-0 w-0 overflow-hidden">City</label>
              <input type="text" placeholder="City" className="form-input mb-4 sm:mb-5" id="city"/>
              <div className="flex justify-between">
                <label for="country" className="block relative h-0 w-0 overflow-hidden">Country</label>
                <input type="text" placeholder="Country/Region" className="form-input mb-4 sm:mb-5 mr-2"
                     id="country"/>
                <label for="post_code" className="block relative h-0 w-0 overflow-hidden">Post
                  code</label>
                <input type="number" placeholder="Post code" className="form-input mb-4 sm:mb-5 ml-1"
                     id="post_code"/>
              </div>
              <div className="flex items-center pt-2">
                <label for="save_info" className="block relative h-0 w-0 overflow-hidden">Save
                  Info</label>
                <input type="checkbox" className="form-checkbox" id="save_info"/>
                <p className="font-hkregular text-sm pl-3 text-secondary">
                  Save this information for next time
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center pt-8 sm:pt-12">

              <Link to="/cart"
                  className="flex items-center mb-3 sm:mb-0 font-hkregular group-hover:font-hkbold text-sm text-secondary hover:text-primary group transition-all"><i
                className="bx bx-chevron-left text-secondary group-hover:text-primary pr-2 text-xl transition-colors"></i>Return
                to Cart</Link>

              <Link to="/shipping-method" className="btn btn-primary">Continue to shipping method</Link>
            </div>
          </div>
        </div>
        <CustomerOrder/>
      </div>
    </div>
  );
}

CartCustomerInfo.propTypes = {}

export default CartCustomerInfo
