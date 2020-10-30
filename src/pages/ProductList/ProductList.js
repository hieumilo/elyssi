import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import ProductListViewList from './../../components/Product/ProductListViewList'
import ProductListViewGrid from './../../components/Product/ProductListViewGrid'
import ProductBanner from './../../components/Product/Banner'
import ProductFilter from './../../components/Product/Filter'
import ProductPagination from './../../components/Product/Pagination'
import queryString from 'query-string'

import { VIEW } from './../../utils/constant'

function ProductList () {
  let { slug } = useParams();
  const [view, setView] = useState(VIEW[0])
  const [products, setProducts] = useState({})
  const [params] = useState({
    limit: 12,
    page: 1,
  })

  async function getProducts(slug) {
    const data = await fetch(`/api/${slug}/products?${queryString.stringify(params)}`, )
      .then(res => res.json());
    setProducts(data)
  }

  useEffect(() => {
    getProducts(slug);
  }, [slug]);

  return (
    <div className="container">
      <ProductBanner />
      <ProductFilter setView={setView}/>
      {/*view*/}
      {view === VIEW[0] && <ProductListViewList products={products.data} />}
      {view === VIEW[1] && <ProductListViewGrid products={products.data} />}
      {/*pagination*/}
      <ProductPagination />
    </div>
  )
}

export default ProductList
