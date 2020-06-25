import React from 'react'
import RefSliderItem from './RefSliderItem'
import Slider from 'react-slick'
import sliderGirl from '../img/reference-girl.png'

const slides = [
  {
    text:
      "Hello. A few months ago I was a client of this company and after finishing all of the work could strongly recommended this company. All of my requirements and marks was improved and in result I'm very happy!",
    image: sliderGirl,
    name: 'Oksana Sheketa',
    position: 'CTO Company Name',
  },
  {
    text:
      "Hello. A few months ago I was a client of this company and after finishing all of the work could strongly recommended this company. All of my requirements and marks was improved and in result I'm very happy!",
    image: sliderGirl,
    name: 'Oksana Sheketa',
    position: 'CTO Company Name',
  },
  {
    text:
      "Hello. A few months ago I was a client of this company and after finishing all of the work could strongly recommended this company. All of my requirements and marks was improved and in result I'm very happy!",
    image: sliderGirl,
    name: 'Oksana Sheketa',
    position: 'CTO Company Name',
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
        // appendArrows:
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      },
    },
  ],
}

const RefSlider = () => (
  <Slider {...settings}>
    {slides.map((item, i) => (
      <RefSliderItem key={i} slide={item} />
    ))}
  </Slider>
)

export default RefSlider
