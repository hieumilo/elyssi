import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import ProductBanner from './../../components/Product/Banner'
import ProductImage from './../../components/Product/ProductImage'
import ProductDetail from './../../components/Product/ProductDetail'
import ProductTabs from './../../components/Product/ProductTabs'
import ProductCarousel from '../../components/Carousel/ProductCarousel';
import ProductRelated from './../../components/Product/ProductRelated';

function ProductList () {
  let { slug } = useParams();
  const [product, setProduct] = useState({})

  async function getProductDetail(slug) {
    const data = await fetch(`/api/products/${slug}`)
      .then(res => res.json());
    setProduct(data)
  }

  useEffect(() => {
    getProductDetail(slug);
  }, [slug]);

  return (
    <div className="container">
      <ProductBanner />
      <div className="pt-16 pb-24 flex flex-col lg:flex-row justify-between -mx-5">
        <ProductImage images={product.media_gallery || []}/>
        <ProductDetail product={product}/>
      </div>
      <ProductTabs
        description={product.description}
        additionalInformation={product.additional_information}
        reviews={product.reviews?.items || []}
      />

      {product.related_products && <ProductRelated items={product.related_products} />}
    </div>
  )
}

export default ProductList
