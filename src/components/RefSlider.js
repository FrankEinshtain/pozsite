import React from 'react'
import RefSliderItem from './RefSliderItem'
import Slider from 'react-slick'

const NextRefArrow = (props) => (
  <div className='arrow arrow-next' onClick={props.onClick} />
)

const PrevRefArrow = (props) => (
  <div className='arrow arrow-prev' onClick={props.onClick} />
)

const settings = {
  dots: true,
  arrows: false,
  className: 'ref-slider',
  centerMode: true,
  infinite: true,
  centerPadding: '25%',
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        centerPadding: '20%',
      },
    },
    {
      breakpoint: 576,
      settings: {
        centerMode: null,
        arrows: true,
        nextArrow: <NextRefArrow />,
        prevArrow: <PrevRefArrow />,
      },
    },
  ],
}

const RefSlider = ({ data }) => (
  <Slider {...settings}>
    {data.map((item, i) => (
      <RefSliderItem key={i} slide={item} />
    ))}
  </Slider>
)

export default RefSlider
