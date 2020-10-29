import { useState, useEffect } from 'react'
import queryString from 'query-string'
import HeroCarousel from './../../components/Carousel/HeroCarousel'
import SubBanner from './../../components/SubBanner/SubBanner'
import TrendingCollection from './../../components/TrendingCollection/TrendingCollection'
import ProductTrends from './../../components/ProductTrends/ProductTrends'
import Community from './../../components/Community/Community'
import ProductSale from './../../components/ProductSale/ProductSale'
import NewArrivals from './../../components/NewArrivals/NewArrivals'

import { heroItems, subBanners } from './../../utils/constant'

function Home() {
  const [trendProducts, setTrendProducts] = useState({})
  const [saleProducts, setSaleProducts] = useState({})
  const [params] = useState({
    limit: 6,
    page: 1,
  })

  async function getProducts(slug) {
    const data = await fetch(`/api/${slug}/products?${queryString.stringify(params)}`, )
      .then(res => res.json());
    setTrendProducts(data)
    setSaleProducts(data)
  }

  useEffect(() => {
    getProducts('slug');
  }, []);

  return (
    <div className="container">
      <HeroCarousel items={heroItems} />
      <SubBanner items={subBanners} />
      <TrendingCollection />
      {trendProducts.data && <ProductTrends items={trendProducts.data} />}
      <Community />
      <NewArrivals />
      {saleProducts.data && <ProductSale items={saleProducts.data} />}
    </div>
  )
}

Home.defaultProps = {
}

Home.propTypes = {
}

export default Home
