import React from 'react'
import Img from 'gatsby-image'

const Hero = ({ data }) => {
  console.log('herodata:\n', data)
  return (
    <section className='hero'>
      <Img className='hero-img' fluid={data.background.childImageSharp.fluid} />
      <div className='container'>
        <div className='inner'>
          <div className='hero-content'>
            <h1>{data.title}</h1>
            <h2>{data.subtitle}</h2>
            <a href={data.buttonurl} className='button hero-button'>
              LET’S TALK
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
