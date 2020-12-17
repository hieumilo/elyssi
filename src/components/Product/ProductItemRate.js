import PropTypes from 'prop-types';

const ProductItemRate = ({product, className}) => (
  <div className={`flex items-center ${className}`}>
    <div className="flex items-center">
      {[...Array(5).keys()].map((index, key) => (
        <i className="bx bxs-star text-primary" key={key}></i>
      ))}
    </div>
    <div>
      <p className="font-hkregular text-sm text-secondary ml-2">
        ({product.rating_summary || 0})
      </p>
    </div>
  </div>
)

ProductItemRate.defaultProps = {
}

ProductItemRate.propTypes = {
  product: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default ProductItemRate
