function ProductBanner() {
  return (
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
  )
}

ProductBanner.propTypes = {
}

export default ProductBanner
