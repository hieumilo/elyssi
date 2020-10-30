import PropTypes from 'prop-types'

function ProductQuantity({productQuantity, setProductQuantity}) {
  const incrementProductQuantity = () => {
    setProductQuantity(productQuantity + 1)
  }

  const decrementProductQuantity = () => {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1)
    }
  }
  
  return (
    <div className="flex items-center justify-between pb-8">
      <div className="w-1/3 sm:w-1/5">
        <p className="font-hkregular text-secondary">Quantity</p>
      </div>
      <div className="w-2/3 sm:w-5/6 flex">
        <label htmlFor="quantity-form" className="block relative h-0 w-0 overflow-hidden">
          Quantity form
        </label>
        <input
          type="number"
          id="quantity-form"
          className="form-input form-quantity rounded-r-none w-16 py-0 px-2 text-center"
          value={productQuantity}
          min="1"
          readOnly
        />
        <div className="flex flex-col">
          <span
            className="px-1 bg-white border border-l-0 border-grey-darker flex-1 rounded-tr cursor-pointer"
            onClick={incrementProductQuantity}>
            <i className="bx bxs-up-arrow text-xs text-primary pointer-events-none"></i>
          </span>
          <span
            className="px-1 bg-white flex-1 border border-t-0 border-l-0 rounded-br border-grey-darker cursor-pointer"
            onClick={decrementProductQuantity}>
            <i className="bx bxs-down-arrow text-xs text-primary pointer-events-none"></i>
          </span>
        </div>
      </div>
    </div>
  )
}

ProductQuantity.propTypes = {
  productQuantity: PropTypes.number,
  setProductQuantity: PropTypes.func,
}

export default ProductQuantity
