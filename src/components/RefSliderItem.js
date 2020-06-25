import React from 'react'
import Img from 'gatsby-image'

const RefSliderItem = ({ slide }) => {
  const { text, photo, name, position } = slide
  return (
    <div className='item'>
      <div className='item-text'>
        <p>{text}</p>
      </div>
      <div className='item-author'>
        <Img className='item-author-img' fluid={photo.childImageSharp.fluid} />
        <h4 className='item-author-name'>{name}</h4>
        <p className='item-author-position'>{position}</p>
      </div>
    </div>
  )
}

export default RefSliderItem
