import React from 'react'
import Button from '../components/shared/Button'
// import Img from 'gatsby-image'

const VacSliderItem = ({ image, slide }) => {
  const { title, bullit, buttonurl, buttontext, requirements } = slide
  return (
    <div className='item'>
      <div className='item-header'>
        <img src={image} alt='' />
        {/* <Img className='item-header-img' fluid={image} /> */}
        <h4>{title}</h4>
      </div>
      <div className='item-bullit'>{bullit}</div>
      <div className='item-content'>
        {requirements.map((item, i) => (
          <p key={i}>{item.item}</p>
        ))}
      </div>
      <Button
        url={buttonurl}
        userClass='vac-slider-item-button'
        text={buttontext}
      />
    </div>
  )
}

export default VacSliderItem
