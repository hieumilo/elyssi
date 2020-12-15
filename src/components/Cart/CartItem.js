import PropTypes from 'prop-types';

function CartItem ({product}) {
  return (
    <div className="py-3 border-b border-grey-dark flex-row justify-between items-center mb-0 hidden md:flex">
      <i className="bx bx-x text-grey-darkest text-2xl sm:text-3xl mr-6 cursor-pointer"></i>
      <div className="w-1/2 lg:w-3/5 xl:w-1/2 flex flex-row items-center border-b-0 border-grey-dark pt-0 pb-0 text-left">
        <div className="w-20 mx-0 relative pr-0">
          <div className="h-20 rounded flex items-center justify-center">
            <div className="w-16 h-16 mx-auto bg-center bg-no-repeat bg-cover" style={{backgroundImage: `url(${product.thumbnail.url})`}}>
            </div>
          </div>
        </div>
        <span className="font-hkregular text-secondary text-base mt-2">{product.name}</span>
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
        <span className="font-hkregular text-secondary">${product.price_range?.maximum_price?.regular_price?.value}</span>
      </div>
    </div>
  )
}

CartItem.defaultProps = {
}

CartItem.propTypes = {
  product: PropTypes.object
};

export default CartItem
