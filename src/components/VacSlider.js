import React from 'react'
import VacSliderItem from './VacSliderItem'
import Slider from 'react-slick'
import vacIcon from '../img/icons/vacancies.png'

const NextVacArrow = (props) => (
  <div className='arrow arrow-next' onClick={props.onClick} />
)

const PrevVacArrow = (props) => (
  <div className='arrow arrow-prev' onClick={props.onClick} />
)

const settings = {
  dots: true,
  className: 'vac-slider',
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  nextArrow: <NextVacArrow />,
  prevArrow: <PrevVacArrow />,
}

const VacSlider = ({ data }) => {
  console.log('vac sliderdata\n', data)
  return (
    <Slider {...settings}>
      {data.map((item, q) => (
        <VacSliderItem key={q} image={vacIcon} slide={item} />
      ))}
    </Slider>
  )
}

export default VacSlider
