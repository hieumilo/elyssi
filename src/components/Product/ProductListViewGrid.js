import PropTypes from 'prop-types'
import ProductGridItem from './ProductGridItem'

function ProductListViewGrid ({products}) {
  return (
    <div className="flex flex-wrap justify-between pb-6 lg:pb-10 xl:pb-12 sm:-px-3 md:-mx-5">
      {products && products.map((product, key) => (
        <div
          className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 relative group pb-12 lg:last:hidden xl:last:block"
          key={key}>
          <ProductGridItem product={product}/>
        </div>
      ))}
    </div>
  )
}

ProductListViewGrid.propTypes = {
  products: PropTypes.array.isRequired
}

export default ProductListViewGrid
