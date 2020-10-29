import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import ProductListViewList from './../../components/Product/ProductListViewList'
import ProductListViewGrid from './../../components/Product/ProductListViewGrid'
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
      <div className="flex relative">
        <div
          className="bg-no-repeat bg-cover bg-center w-3/4 ml-auto h-56 sm:h-64 md:h-68"
          style={{backgroundImage: "url(https://source.unsplash.com/1000x640/?-04)"}}>
        </div>
        <div
          className="w-full h-56 sm:h-64 md:h-68 bg-no-repeat bg-cover absolute top-0 left-0"
          style={{backgroundImage: "linear-gradient(90deg, rgba(55,36,31,1) 40%, rgba(0,0,0,0) 100%)"}}>
          <div className="py-20 px-6 sm:px-12 lg:px-20">
            <h1 className="font-butlerregular text-white text-2xl sm:text-3xl md:text-7xl lg:text-5xl">
              Collection Grid
            </h1>
            <div className="flex pt-2">
              <a href="/" className="font-hkregular text-white text-base hover:text-primary transition-colors">Home</a>
              <span className="font-hkregular text-white text-base px-2">.</span>
              <span className="font-hkregular text-white text-base">Collection Grid</span>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 flex flex-col sm:flex-row justify-between">
        <div className="flex items-center justify-center sm:justify-start">
          <i className="bx bxs-filter-alt text-primary text-xl"></i>
          <p className="font-hkregular text-secondary md:text-lg px-2 leading-none block">
            Filter
          </p>
          <div className="flex items-center border border-grey-darker p-2 rounded">
            <a onClick={() => setView(VIEW[0])}>
              <i className="bx bx-menu text-grey-darker hover:text-secondary-light text-xl leading-none block transition-colors"></i>
            </a>
            <div className="w-px h-4 mx-2 bg-grey-darker"></div>
            <a onClick={() => setView(VIEW[1])}>
              <i className="bx bxs-grid text-grey-darker hover:text-secondary-light text-xl leading-none block transition-colors"></i>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center sm:justify-end mt-6 sm:mt-0 w-76">
          <p className="font-hkregular text-secondary md:text-lg mr-2 -mt-2">Sort by:
          </p>
          <select className="w-2/3 form-select">
            <option value="0">Best Match</option>
            <option value="1">Price: Low - High</option>
            <option value="2">Price: High - Low</option>
          </select>
        </div>
      </div>
      {/*view*/}
      {view === VIEW[0] && <ProductListViewList products={products.data} />}
      {view === VIEW[1] && <ProductListViewGrid products={products.data} />}
      {/*pagination*/}
      <div className="pb-16 flex justify-center mx-auto">
        <span className="font-hksemibold text-grey-darkest transition-colors hover:text-black pr-5 cursor-pointer">Previous</span>
        <span className="font-hksemibold text-black transition-colors hover:text-white text-sm hover:bg-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 cursor-pointer">1</span>
        <span className="font-hksemibold text-black transition-colors hover:text-white text-sm hover:bg-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 cursor-pointer">2</span>
        <span className="font-hksemibold text-black transition-colors hover:text-white text-sm hover:bg-primary h-6 w-6 rounded-full flex items-center justify-center cursor-pointer">3</span>
        <span className=" font-hksemibold text-grey-darkest transition-colors hover:text-black pl-5 cursor-pointer">Next</span>
      </div>
    </div>
  )
}

export default ProductList
