import PropTypes from 'prop-types';
import ProductCarousel from './../../components/Carousel/ProductCarousel'

const ProductRelated = ({items}) => (
  <div className="pb-20 md:pb-32">
    <div className="text-center">
      <h2 className="font-butlerregular text-secondary text-3xl md:text-4xl lg:text-7xl">
        Related Product
      </h2>
      <p className="font-hkregular text-secondary-lighter text-lg md:text-xl pt-2 pb-6 sm:pb-8 lg:pb-0">
        Get the latest news &amp; updates from Ciloe</p>
    </div>
    <ProductCarousel items={items} name="product-related" />
  </div>
)

ProductRelated.propTypes = {
  items: PropTypes.array
}

export default ProductRelated
