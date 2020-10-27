import HeroCarousel from './../../components/Carousel/HeroCarousel'

const heroItems = [
  {title: 'Elyssi New Men’s Outdoor Collection', url: '/collection-grid', image: 'https://source.unsplash.com/1000x640/?-01'},
  {title: 'Blake by Elyssi <br /> 30% off', url: '/collection-grid', image: 'https://source.unsplash.com/1000x640/?-02'},
  {title: 'Hoodie your way! <br /> For Men', url: '/collection-grid', image: 'https://source.unsplash.com/1000x640/?-03'},
  {title: 'Match and play Women’s Dresses', url: '/collection-grid', image: 'https://source.unsplash.com/1000x640/?-04'},
  {title: 'Back to school, <br /> the stylish way', url: '/collection-grid', image: 'https://source.unsplash.com/1000x640/?-05'},
]

function Home() {
  return (
    <div className="container">
      <HeroCarousel items={heroItems} />
    </div>
  )
}

Home.defaultProps = {
}

Home.propTypes = {
}

export default Home
