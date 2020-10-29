import PropTypes from 'prop-types'
import ProductListItem from './ProductListItem'

function ProductListViewList ({products}) {
  return (
    <div className="flex flex-wrap justify-between lg:-mx-5">
      {products && products.map((product, key) => <ProductListItem product={product} key={key}/>)}
    </div>
  )
}

ProductListViewList.propTypes = {
  products: PropTypes.array
}

export default ProductListViewList
