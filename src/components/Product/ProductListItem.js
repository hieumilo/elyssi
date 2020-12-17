import PropTypes from 'prop-types'
import ProductListItemHover from './ProductListItemHover'
import ProductItemRate from './ProductItemRate'

function ProductListItem ({product}) {
  return (
    <div className="w-full lg:w-1/2 lg:px-5">
      <div className="flex flex-col sm:flex-row items-center border border-grey-dark mb-8 sm:mb-10 lg:mb-12 group shadow-none hover:shadow-lg rounde transition-shadowd">
        <div className="w-full sm:w-2/5 lg:w-5/11 relative">
          <div className="relative rounded-l">
            <div className="w-full h-68 bg-center bg-no-repeat bg-cover" style={{backgroundImage: `url(${product.thumbnail.url})`}}>
            </div>
            <span className="absolute top-0 right-0 bg-white px-5 py-1 mt-4 mr-4 rounded-full font-hkbold text-v-green text-sm uppercase tracking-wide">
              New
            </span>
            <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto transition-all overflow-hidden rounded-l">
            </div>
            <div className="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center py-28 inset-0 group hover:shadow-lg transition-all">
              <ProductListItemHover product={product}/>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-3/5 lg:w-6/11 px-6 py-6 sm:py-0">
          <h3 className="font-hkregular text-xl xl:text-2xl text-grey-darkest">
            {product.name || product.thumbnail?.label}
          </h3>
          <span className="font-hkbold text-secondary text-xl block pt-1">
            ${product.price_range?.maximum_price?.regular_price?.value || 0}
          </span>
          <span className="pt-4 font-hkbold text-v-green text-base block">
            {product.availability}
          </span>
          <p className="font-hkregular text-grey-darkest pt-2 text-sm xl:text-base">
            {product.short_description?.html}
          </p>
          <ProductItemRate product={product} className="pt-3 xl:pt-5" />
        </div>
      </div>
    </div>
  )
}

ProductListItem.propTypes = {
  product: PropTypes.object.isRequired
}

export default ProductListItem
