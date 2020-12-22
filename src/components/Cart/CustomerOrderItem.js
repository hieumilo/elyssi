import PropTypes from 'prop-types';

function CustomerOrderItem({product}){
  return (
    <div className="flex items-center mb-5">
      <div className="w-20 relative mr-3 sm:pr-0">
        <div className="h-20 rounded flex items-center justify-center">
          <div className="w-12 h-16 bg-center bg-no-repeat bg-cover" style={{backgroundImage: `url(${product.image.url})`}}>
          </div>
          <span
            className="font-hkregular text-white text-xs px-2 leading-none absolute top-0 right-0 bg-primary flex items-center justify-center rounded-full -mt-2 -mr-2 h-6 w-6">
            {product.qty}
          </span>
        </div>
      </div>
      <p className="font-hkregular text-secondary text-lg">
        {product.name}
      </p>
    </div>
  )}

CustomerOrderItem.defaultProps = {
}

CustomerOrderItem.propTypes = {
  products: PropTypes.array
};

export default CustomerOrderItem
