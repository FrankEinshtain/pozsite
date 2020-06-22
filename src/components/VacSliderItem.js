import React from 'react'

const VacSliderItem = ({ slide }) => {
  const { icon, position, bullit, requirements } = slide
  return (
    <div className='item'>
      <div className='item-header'>
        <img className='item-header-img' src={icon} />
        <h4>{position}</h4>
      </div>
      <div className='item-bullit'>{bullit}</div>
      <div className='item-content'>
        {requirements.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>
      <a className='button vac-slider-item-button' src='#'>
        send your cv
      </a>
    </div>
  )
}

export default VacSliderItem
