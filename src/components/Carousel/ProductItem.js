import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import iconCart from './../../assets/img/icons/icon-cart.svg'
import iconSearch from './../../assets/img/icons/icon-search.svg'
import iconHeart from './../../assets/img/icons/icon-heart.svg'

const ProductItem = ({item}) => (
  <div className="sm:px-5 lg:px-4">
    <div className="relative rounded flex justify-center items-center">
      <div
        className="w-68 h-68 bg-center bg-no-repeat bg-cover"
        style={{backgroundImage: "url(https://source.unsplash.com/1000x640/?k-2)"}}>
      </div>
      <div className="absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">
        <p className="text-v-green font-hkbold text-sm uppercase tracking-wide">
          New
        </p>
      </div>
      <div className="absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto transition-all overflow-hidden rounded">
      </div>
      <div className="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center">
        <a
          href="/cart"
          className="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
          <img src={iconCart} className="h-6 w-6" alt="icon cart" />
        </a>
        <a
          href="/product"
          className="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
          <img src={iconSearch} className="h-6 w-6" alt="icon search" />
        </a>
        <a
          href="/account/wishlist/"
          className="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all">
          <img src={iconHeart} className="h-6 w-6" alt="icon heart" />
        </a>
      </div>
    </div>
    <a href="/product" className="flex justify-between items-center pt-6">
      <div>
        <h3 className="font-hkregular text-base text-secondary">
          Woodie Blake
        </h3>
        <div className="flex items-center">
          <div className="flex items-center">
            <i className="bx bxs-star text-primary"></i>
            <i className="bx bxs-star text-primary"></i>
            <i className="bx bxs-star text-primary"></i>
            <i className="bx bxs-star text-primary"></i>
            <i className="bx bxs-star text-primary"></i>
          </div>
          <div>
            <p className="font-hkregular text-sm text-secondary ml-2">
              45
            </p>
          </div>
        </div>
      </div>
      <div>
        <span className="font-hkbold text-primary text-xl">$115.0</span>
      </div>
    </a>
  </div>
)

ProductItem.defaultProps = {
}

ProductItem.propTypes = {
  item: PropTypes.object
};

export default ProductItem
