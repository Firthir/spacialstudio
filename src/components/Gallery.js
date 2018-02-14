import React from 'react'

import Flickity from './Flickity'
import BackgroundImage from './BackgroundImage'
import './Gallery.css'

const flickityOptions = {
  initialIndex: 0,
  autoPlay: 1500,
  wrapAround: true,
  prevNextbuttons: true,
  pageDots: false
}

export default ({ images }) => (
  <div className='Gallery'>
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
    >
      {images.map((image, index) => (
        <BackgroundImage lazy key={image + index} src={image} alt='gallery' />
      ))}
    </Flickity>
  </div>
)
