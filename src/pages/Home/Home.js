import HeroCarousel from './../../components/Carousel/HeroCarousel'
import SubBanner from './../../components/SubBanner/SubBanner'
import TrendingCollection from './../../components/TrendingCollection/TrendingCollection'
import ProductTrends from './../../components/ProductTrends/ProductTrends'
import Community from './../../components/Community/Community'
import ProductSale from './../../components/ProductSale/ProductSale'
import NewArrivals from './../../components/NewArrivals/NewArrivals'

import imgShipping from './../../assets/img/icons/icon-shipping.svg'
import imgSupport from './../../assets/img/icons/icon-support.svg'
import imgReturn from './../../assets/img/icons/icon-return.svg'

const heroItems = [
  {title: 'Elyssi New Men’s Outdoor Collection', url: '/collection-grid', image: 'https://source.unsplash.com/1000x640/?-01'},
  {title: 'Blake by Elyssi <br /> 30% off', url: '/collection-grid', image: 'https://source.unsplash.com/1000x640/?-02'},
  {title: 'Hoodie your way! <br /> For Men', url: '/collection-grid', image: 'https://source.unsplash.com/1000x640/?-03'},
  {title: 'Match and play Women’s Dresses', url: '/collection-grid', image: 'https://source.unsplash.com/1000x640/?-04'},
  {title: 'Back to school, <br /> the stylish way', url: '/collection-grid', image: 'https://source.unsplash.com/1000x640/?-05'},
]

const subBanners = [
  {title: 'Free shipping', detail: 'On all orders over $30', icon: imgShipping},
  {title: 'Always available', detail: '24/7 call center available', icon: imgSupport},
  {title: 'Free returns', detail: '30 days free return policy', icon: imgReturn},
]

function Home() {
  return (
    <div className="container">
      <HeroCarousel items={heroItems} />
      <SubBanner items={subBanners} />
      <TrendingCollection />
      <ProductTrends items={[{}, {}]} />
      <Community />
      <NewArrivals />
      <ProductSale items={[{}, {}]} />
    </div>
  )
}

Home.defaultProps = {
}

Home.propTypes = {
}

export default Home
