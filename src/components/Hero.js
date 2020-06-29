import React from 'react'
import Img from 'gatsby-image'
import Button from '../components/shared/Button'

const Hero = ({ data }) => {
  const rawTitle = data.title.split(' ')
  const title = rawTitle.map((word, i) => {
    return i === rawTitle.length - 1 ? (
      <span key={i} className='big-green'>
        {word}
      </span>
    ) : (
      <span key={i}>{word} </span>
    )
  })
  return (
    <section className='hero'>
      <Img className='hero-img' fluid={data.background.childImageSharp.fluid} />
      <div className='container'>
        <div className='inner'>
          <div className='hero-content'>
            <h1>{title}</h1>
            <h2>{data.subtitle}</h2>
            <Button
              url={data.buttonurl}
              userClass='hero-button'
              text={data.buttontext}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
