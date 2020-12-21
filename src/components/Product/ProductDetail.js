import { useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ProductItemRate from './ProductItemRate'
import ProductColor from './ProductColor'
import ProductSize from './ProductSize'
import ProductQuantity from './ProductQuantity'
import {CartContext} from './../../context/CartContext'

const ProductDetail = ({product}) => {
  const [productQuantity, setProductQuantity] = useState(1)
  const [colors, setColors] = useState([])
  const [colorSelected, setColorSelected] = useState([])
  const [sizes, setSizes] = useState([])
  const [sizeSelected, setSizeSelected] = useState([])
  const [productSeledted, setProductSeledted] = useState({})
  const {addToCart} = useContext(CartContext);

  useEffect(() => {
    (product.configurable_options || []).map((item) => {
      if (item.attribute_code === 'color') {
        setColors(item.values)
        setColorSelected(item.values[0].value_index)
      }
      if (item.attribute_code === 'size') {
        setSizes(item.values)
        setSizeSelected(item.values[0].value_index)
      }
      return null;
    })
  }, [product]);

  useEffect(() => {
    (product.variants || []).map((variant) => {
      let flagColor = false;
      let flagSize = false;
      (variant.attributes || []).map((item) => {
        if (item.code === 'color' && item.value_index === colorSelected) {
          flagColor = true
        }
        if (item.code === 'size' && item.value_index === sizeSelected) {
          flagSize = true
        }
        return null;
      })
      if (flagColor && flagSize) {
        setProductSeledted(variant.product);
      }
      return null;
    })
  }, [colorSelected, sizeSelected, product]);

  const onSelectedColor = (color) => {
    setColorSelected(color)
  }

  const selectedSize = (size) => {
    setSizeSelected(size)
  }

  const _addToCart = () => {
    addToCart({
      product: productSeledted,
      qty: productQuantity
    });
  }

  return (
    <div className="lg:w-1/2 pt-12 sm:pt-16 lg:pt-0 px-5">
      <div className="border-b border-grey-dark mb-8">
        <div className="flex items-center">
          <h2 className="font-butlerregular text-3xl md:text-4xl lg:text-7xl">
            {productSeledted.name}
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
          {productSeledted.stock_status}
        </p>
      </div>
      <p className="font-hkregular text-secondary pb-5">
        {product.short_description?.html}  
      </p>
      <ProductColor colors={colors || []} selected={colorSelected} onSelectedColor={onSelectedColor} />
      <ProductSize sizes={sizes || []} selected={sizeSelected} selectedSize={selectedSize} />
      <ProductQuantity productQuantity={productQuantity} setProductQuantity={setProductQuantity} />
      <div className="flex pb-8 group">
        <button className="btn btn-outline mr-4 md:mr-6" onClick={_addToCart}>
          Add to cart
        </button>
        <a href="/cart" className="btn btn-primary">
          BUY NOW
        </a>
      </div>
      <div className="flex pb-2">
        <p className="font-hkregular text-secondary">SKU:</p>
        <p className="font-hkbold text-secondary pl-3">
          {productSeledted.sku}
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
