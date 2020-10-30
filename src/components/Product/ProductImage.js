import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function ProductImage({images}) {
  const [selectedImage, setSelectedImage] = useState('')
  useEffect(() => {
    if (images.length > 0) {
      setSelectedImage(images[0])
    }
  }, [images])

  return (
    <div className="lg:1/2 flex flex-col-reverse sm:flex-row-reverse lg:flex-row justify-between px-5">
      <div className="sm:pl-5 md:pl-4 lg:pl-0 lg:pr-2 xl:pr-3 flex flex-row sm:flex-col">
        {images.map((image, key) => (
          <div className="w-28 sm:w-32 lg:w-24 xl:w-28 relative pb-5 mr-3 sm:pr-0" key={key}>
            <div className="bg-v-pink border border-grey relative h-28 rounded flex items-center justify-center">
              <div
                className="w-16 h-20 my-3 bg-center bg-no-repeat bg-cover cursor-pointer"
                style={{backgroundImage: `url(${image})`}}
                onClick={() => setSelectedImage(image)}
              >
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full sm:w-96 lg:w-80 xl:w-90 relative pb-5 sm:pb-0">
        <div className="bg-v-pink border border-grey relative h-80 sm:h-94 xl:h-96 rounded flex items-center justify-center">
          <div
            className="w-56 xl:w-64 h-76 sm:h-82 xl:h-86 my-6 sm:my-12 xl:my-24 bg-center bg-no-repeat bg-cover"
            style={{backgroundImage: `url(${selectedImage})` }}>
          </div>
        </div>
      </div>
    </div>
  )
}

ProductImage.propTypes = {
  images: PropTypes.array
}

export default ProductImage
