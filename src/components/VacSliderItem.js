import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'

const VacSliderItem = ({ image, slide }) => {
  const { title, bullit, buttontext, link, requirements } = slide
  const { setModalClass } = useContext(UserContext)

  const handleClick = () => {
    setModalClass('cv')
  }

  return (
    <div className='item'>
      <div className='item-header'>
        <img src={image} alt='' />
        <h4>{title}</h4>
      </div>
      <div className='item-bullit'>{bullit}</div>
      <div className='item-content'>
        {requirements.map((item, i) => (
          <p key={i}>{item.item}</p>
        ))}
        <a target='_blanc' className='item-link' href={link}>
          More Details...
        </a>
      </div>
      <button onClick={handleClick} className='button item-button'>
        {buttontext}
      </button>
    </div>
  )
}

export default VacSliderItem
