import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css'
import '@glidejs/glide/dist/css/glide.theme.min.css'

const GlideCarousel = ({element, options, childrens, dotStyle, showDot}) => {
  const [slider] = useState(new Glide(`.${element}`, options))
  useEffect(() => {
    slider.mount()

    // // subscribe to an event 
    // slider.on('run.before', (event) => {
    //   // ... do something cool here
    // })

    // cleanup when unmounting component
    return () => slider.destroy()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div x-data="true" x-init="collectionSliders">
      <div className={`${element} relative`} x-data="true">
        <div className="glide__track" data-glide-el="track">
          <div className="glide__slides">
            {childrens && childrens.map((item, key) => (
              <div className="glide__slide" key={key}>
                {item}
              </div>
            ))}
          </div>
        </div>
        {showDot && (
          <div className="absolute bottom-0 inset-x-0 mb-6 z-30 text-center" data-glide-el="controls[nav]">
            {childrens && childrens.map((item, key) => (
              <span
                className={dotStyle}
                data-glide-dir={`=${key}`}
                key={key}
              ></span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

GlideCarousel.defaultProps = {
  element: 'glide',
  options: {},
  childrens: [],
  showDot: false,
}

GlideCarousel.propTypes = {
  options: PropTypes.object,
  childrens: PropTypes.array,
  dotStyle: PropTypes.string,
  showDot: PropTypes.bool,
};

export default GlideCarousel
