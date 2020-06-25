import React from 'react'
import Img from 'gatsby-image'

const WhatWeDo = ({ data }) => (
  <section id='what-we-do' className='what-we-do'>
    <div className='container'>
      <div className='inner'>
        <h3>What We Do</h3>
        <div className='what-we-do-list'>
          {data.map((item, i) => (
            <div key={i} className='what-we-do-item'>
              <Img
                className='what-we-do-img'
                fluid={item.icon.childImageSharp.fluid}
              />
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default WhatWeDo
