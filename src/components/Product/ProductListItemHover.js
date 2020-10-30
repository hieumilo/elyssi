import { Fragment } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import iconCart from './../../assets/img/icons/icon-cart.svg'
import iconSearch from './../../assets/img/icons/icon-search.svg'
import iconHeart from './../../assets/img/icons/icon-heart.svg'

const ProductListItemHover = ({product}) => (
  <Fragment>
    <a
      href="#"
      className="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
      <img src={iconCart} className="h-6 w-6" alt="icon cart" />
    </a>
    <Link
      to={`/p/${product.slug}`}
      className="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
      <img src={iconSearch} className="h-6 w-6" alt="icon search" />
    </Link>
    <a
      href="#"
      className="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all">
      <img src={iconHeart} className="h-6 w-6" alt="icon heart" />
    </a>
  </Fragment>
)

ProductListItemHover.defaultProps = {
}

ProductListItemHover.propTypes = {
  product: PropTypes.object
};

export default ProductListItemHover
