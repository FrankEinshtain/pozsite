import React from 'react'
import VacSliderItem from './VacSliderItem'
import Slider from 'react-slick'
import vacIcon from '../img/icons/vac_management.png'

const slides = [
  {
    position: 'Technical Project Manager (Junior/Assistant)',
    icon: vacIcon,
    bullit: 'office',
    requirements: [
      'Commercial experience in IT project management',
      'Upper - intermediate English in verbal and oral communication',
      'Scrum, Agile',
      'Negotiation skills',
      'Communicating across elephants',
    ],
  },
  {
    position: 'Technical Project Manager (Junior/Assistant)',
    icon: vacIcon,
    bullit: 'office',
    requirements: [
      'Commercial experience in IT project management',
      'Upper - intermediate English in verbal and oral communication',
      'Scrum, Agile',
      'Negotiation skills',
      'Communicating across elephants',
    ],
  },
  {
    position: 'Technical Project Manager (Junior/Assistant)',
    icon: vacIcon,
    bullit: 'office',
    requirements: [
      'Commercial experience in IT project management',
      'Upper - intermediate English in verbal and oral communication',
      'Scrum, Agile',
      'Negotiation skills',
      'Communicating across elephants',
    ],
  },
]

const NextArrow = (props) => (
  <div className='arrow arrow-next' onClick={props.onClick} />
)

const PrevArrow = (props) => (
  <div className='arrow arrow-prev' onClick={props.onClick} />
)

const settings = {
  dots: true,
  className: 'vac-slider',
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
}

const VacSlider = () => (
  <Slider {...settings}>
    {slides.map((item, i) => (
      <VacSliderItem key={i} slide={item} />
    ))}
  </Slider>
)

export default VacSlider
