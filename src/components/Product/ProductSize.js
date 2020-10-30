import PropTypes from 'prop-types'

function ProductSize({sizes, selectedSize}) {
  return (
    <div className="flex items-center justify-between pb-4">
      <div className="w-1/3 sm:w-1/5">
        <p className="font-hkregular text-secondary">Size</p>
      </div>
      <div className="w-2/3 sm:w-5/6">
        <select className="w-2/3 form-select">
          {sizes.map((size, key) => (
            <option value={key} key={key}>{size}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

ProductSize.propTypes = {
  sizes: PropTypes.array,
  selectedSize: PropTypes.func,
}

export default ProductSize
