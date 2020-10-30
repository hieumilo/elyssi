import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const CartItem = () => (
  <div className="pt-8">
    <div className="hidden sm:block">
      <div className="flex justify-between border-b border-grey-darker">
        <div className="w-1/2 lg:w-3/5 xl:w-1/2 pl-8 sm:pl-12 pb-2">
          <p className="font-hkbold text-secondary text-sm uppercase">
            Product Name</p>
        </div>
        <div className="w-1/4 sm:w-1/6 lg:w-1/5 xl:w-1/4 pb-2 text-right sm:mr-2 md:mr-18 lg:mr-12 xl:mr-18">
          <p className="font-hkbold text-secondary text-sm uppercase">
            Quantity</p>
        </div>
        <div className="w-1/4 lg:w-1/5 xl:w-1/4 pb-2 text-right md:pr-10">
          <p className="font-hkbold text-secondary text-sm uppercase">
            Price</p>
        </div>
      </div>
    </div>

    <div className="py-3 border-b border-grey-dark flex-row justify-between items-center mb-0 hidden md:flex">
      <i className="bx bx-x text-grey-darkest text-2xl sm:text-3xl mr-6 cursor-pointer"></i>
      <div className="w-1/2 lg:w-3/5 xl:w-1/2 flex flex-row items-center border-b-0 border-grey-dark pt-0 pb-0 text-left">
        <div className="w-20 mx-0 relative pr-0">
          <div className="h-20 rounded flex items-center justify-center">
            <div className="w-16 h-16 mx-auto bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url(https://source.unsplash.com/1000x640/?-03)" }}>
            </div>
          </div>
        </div>
        <span className="font-hkregular text-secondary text-base mt-2">Classic Beige</span>
      </div>
      <div className="w-full sm:w-1/5 xl:w-1/4 text-center border-b-0 border-grey-dark pb-0">
        <div className="mx-auto mr-8 xl:mr-4">
          <div className="flex justify-center" >
            <input type="number" id="quantity-form-desktop" className="form-input form-quantity rounded-r-none w-16 py-0 px-2 text-center" value="1" />
            <div className="flex flex-col">
              <span className="px-1 bg-white border border-l-0 border-grey-darker flex-1 rounded-tr cursor-pointer" ><i className="bx bxs-up-arrow text-xs text-primary pointer-events-none"></i></span>
              <span className="px-1 bg-white flex-1 border border-t-0 border-l-0 rounded-br border-grey-darker cursor-pointer" ><i className="bx bxs-down-arrow text-xs text-primary pointer-events-none"></i></span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/4 lg:w-1/5 xl:w-1/4 text-right pr-10
                    xl:pr-10 pb-4">
        <span className="font-hkregular text-secondary">$1045</span>
      </div>
    </div>

    <div className="flex md:hidden mb-5 pb-5 border-b border-grey-dark items-center justify-center">
      <div className="relative">
        <div className="w-24 h-24 mx-auto bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url(https://source.unsplash.com/1000x640/?-03)" }}>
        </div>
        <i className="bx bx-x text-grey-darkest text-xl cursor-pointer absolute top-0 right-0 -mt-2 -mr-2 bg-white border border-grey-dark  rounded-full shadow"></i>
      </div>
      <div className="pl-4">
        <span className="font-hkregular text-secondary text-base mt-2 font-bold">Classic Beige</span>
        <span className="font-hkregular text-secondary block">$1045</span>

        <div className="w-2/3 sm:w-5/6 flex mt-2">
          <input type="number" id="quantity-form-mobile" className="form-input form-quantity rounded-r-none w-12 py-1 px-2 text-center" x-model="productQuantity" min="1" />
          <div className="flex flex-row">
            <span className="px-2 bg-white flex-1 border  border-l-0 border-grey-darker cursor-pointer flex items-center justify-center" ><i className="bx bxs-down-arrow text-xs text-primary pointer-events-none"></i></span>
            <span className="px-2 bg-white border border-l-0 border-grey-darker flex-1 rounded-r cursor-pointer flex items-center justify-center">
              <i className="bx bxs-up-arrow text-xs text-primary pointer-events-none"></i></span>
          </div>
        </div>
      </div>
    </div>

  </div>
)

CartItem.defaultProps = {
}

CartItem.propTypes = {

};

export default CartItem
