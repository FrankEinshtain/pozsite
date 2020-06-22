import React from 'react'

const RefSliderItem = ({ slide }) => {
  const { text, image, name, position } = slide
  return (
    <div className='item'>
      <div className='item-text'>
        <p>{text}</p>
      </div>
      <div className='item-author'>
        <div className='item-author-img'>
          <img src={image} />
        </div>
        <h4 className='item-author-name'>{name}</h4>
        <p className='item-author-position'>{position}</p>
      </div>
    </div>
  )
}

export default RefSliderItem
