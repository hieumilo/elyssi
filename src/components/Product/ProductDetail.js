import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ProductItemRate from './ProductItemRate'
import ProductColor from './ProductColor'
import ProductSize from './ProductSize'
import ProductQuantity from './ProductQuantity'

const ProductDetail = ({product}) => {
  const [productQuantity, setProductQuantity] = useState(1)
  const [colors, setColors] = useState([])
  const [sizes, setSizes] = useState([])

  useEffect(() => {
    (product.configurable_options || []).map((item) => {
      if (item.attribute_code === 'color') {
        setColors(item.values)
      }
      if (item.attribute_code === 'size') {
        setSizes(item.values)
      }
      return null;
    })
  }, [product]);

  const selectedColor = (color) => {
    console.log(color);
  }

  const selectedSize = (size) => {
    console.log(size);
  }

  return (
    <div className="lg:w-1/2 pt-12 sm:pt-16 lg:pt-0 px-5">
      <div className="border-b border-grey-dark mb-8">
        <div className="flex items-center">
          <h2 className="font-butlerregular text-3xl md:text-4xl lg:text-7xl">
            {product.thumbnail?.label}
          </h2>
          <p className="bg-primary rounded-full ml-8 px-5 py-1 font-hkbold text-white uppercase text-sm">
            20% off
          </p>
        </div>
        <div className="flex items-center pt-3">
          <span className="font-hkregular text-secondary text-2xl">
            ${product.price_range?.maximum_price?.regular_price?.value}
          </span>
          {/*<span className="font-hkregular text-grey-darker text-xl line-through pl-5">$35.0</span>*/}
        </div>
        <ProductItemRate product={product} className="pt-3 pb-8" />
      </div>
      <div className="flex pb-5">
        <p className="font-hkregular text-secondary">
          Availability: 
        </p>
        <p className="font-hkbold text-v-greenpl-3">
          {product.availability}
        </p>
      </div>
      <p className="font-hkregular text-secondary pb-5">
        {product.short_description?.html}  
      </p>
      <ProductColor colors={colors || []} selectedColor={selectedColor} />
      <ProductSize sizes={sizes || []} selectedSize={selectedSize} />
      <ProductQuantity productQuantity={productQuantity} setProductQuantity={setProductQuantity} />
      <div className="flex pb-8 group">
        <a href="/cart" className="btn btn-outline mr-4 md:mr-6">
          Add to cart
        </a>
        <a href="/cart" className="btn btn-primary">
          BUY NOW
        </a>
      </div>
      <div className="flex pb-2">
        <p className="font-hkregular text-secondary">SKU:</p>
        <p className="font-hkbold text-secondary pl-3">
          {product.sku}
        </p>
      </div>
      <p className="font-hkregular text-secondary">
        <span className="pr-2">Categories:</span>
        {(product.categories || []).map(e => e.name).join(', ')}
      </p>
    </div>
  )
}

ProductDetail.propTypes = {
  product: PropTypes.object
}

export default ProductDetail
