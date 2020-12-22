import {Link} from "react-router-dom";
import { useState, Fragment } from 'react';

function CustomerInfo() {
  const [customer, setCustomer] = useState({
    email: '',
    offers: false,
  })
  const [address, setAddress] = useState({
    first_name: '',
    last_name: '',
    address: '',
    address2: '',
    city: '',
    country: '',
    post_code: '',
    save_info: false,
  })

  const handleCustomerChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setCustomer({
      ...customer,
      [name]: value
    });
  }

  const handleAddressChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setAddress({
      ...customer,
      [name]: value
    });
  }

  return (
    <Fragment>
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
          <label htmlFor="email" className="block relative h-0 w-0 overflow-hidden">Email</label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="form-input"
            id="email"
            name="email"
            value={customer.email}
            onChange={handleCustomerChange}
          />
          <div className="flex items-center pt-4">
            <label htmlFor="offers" className="block relative h-0 w-0 overflow-hidden">Sign
              up to exclusive offers</label>
            <input
              type="checkbox"
              className="form-checkbox"
              name="offers"
              onChange={handleCustomerChange}
            />
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
            <label htmlFor="first_name" className="block relative h-0 w-0 overflow-hidden">
              First Name
            </label>
            <input
              type="text"
              placeholder="First Name"
              className="form-input mb-4 sm:mb-5 mr-2"
              id="first_name"
              name="first_name"
              value={address.first_name}
              onChange={handleAddressChange}
            />
            <label htmlFor="last_name" className="block relative h-0 w-0 overflow-hidden">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Last Name"
              className="form-input mb-4 sm:mb-5 ml-1"
              id="last_name"
              name="last_name"
              value={address.last_name}
              onChange={handleAddressChange}
            />
          </div>
          <label htmlFor="address" className="block relative h-0 w-0 overflow-hidden">
            Address
          </label>
          <input
            type="text"
            placeholder="You address"
            className="form-input mb-4 sm:mb-5"
            id="address"
            name="address"
            value={address.address}
            onChange={handleAddressChange}
          />
          <label htmlFor="address2" className="block relative h-0 w-0 overflow-hidden">
            Address 2
            </label>
          <input
            type="text"
            placeholder="Apartment, Suite, etc"
            className="form-input mb-4 sm:mb-5"
            id="address2"
            name="address2"
            value={address.address2}
            onChange={handleAddressChange}
          />
          <label htmlFor="city" className="block relative h-0 w-0 overflow-hidden">
            City
          </label>
          <input
            type="text"
            placeholder="City"
            className="form-input mb-4 sm:mb-5"
            id="city"
            name="city"
            value={address.city}
            onChange={handleAddressChange}
          />
          <div className="flex justify-between">
            <label htmlFor="country" className="block relative h-0 w-0 overflow-hidden">
              Country
            </label>
            <input
              type="text"
              placeholder="Country/Region"
              className="form-input mb-4 sm:mb-5 mr-2"
              id="country"
              name="country"
              value={address.country}
              onChange={handleAddressChange}
            />
            <label htmlFor="post_code" className="block relative h-0 w-0 overflow-hidden">
              Post code
            </label>
            <input
              type="number"
              placeholder="Post code"
              className="form-input mb-4 sm:mb-5 ml-1"
              id="post_code"
              name="post_code"
              value={address.post_code}
              onChange={handleAddressChange}
            />
          </div>
          <div className="flex items-center pt-2">
            <label htmlFor="save_info" className="block relative h-0 w-0 overflow-hidden">
              Save Info
            </label>
            <input
              type="checkbox"
              className="form-checkbox"
              id="save_info"
              name="save_info"
              onChange={handleAddressChange}
            />
            <p className="font-hkregular text-sm pl-3 text-secondary">
              Save this information for next time
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 sm:pt-12">
          <Link
            to="/cart"
            className="flex items-center mb-3 sm:mb-0 font-hkregular group-hover:font-hkbold text-sm text-secondary hover:text-primary group transition-all">
            <i className="bx bx-chevron-left text-secondary group-hover:text-primary pr-2 text-xl transition-colors"></i>
            Return to Cart
          </Link>
          <Link to="/shipping-method" className="btn btn-primary">Continue to shipping method</Link>
        </div>
      </div>
    </Fragment>
  );
}

CustomerInfo.propTypes = {}

export default CustomerInfo
