import React from 'react'
import Img from 'gatsby-image'

const Map = ({ data }) => (
  <section className='map'>
    <div className='container'>
      <div className='inner'>
        <Img className='map-img' fluid={data.childImageSharp.fluid} />
      </div>
    </div>
  </section>
)

export default Map
