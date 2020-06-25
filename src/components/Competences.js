import React from 'react'
import Img from 'gatsby-image/withIEPolyfill'

const Competences = ({ data }) => (
  <section id='competences' className='competences'>
    <div className='container'>
      <div className='inner'>
        <h3>Main Technical Competences</h3>
        <div className='competences-list'>
          {data.map((item, i) => (
            <div key={i} className='competences-item'>
              <div className='title'>{item.title}</div>
              <div className='icons'>
                {item.icons.map((icon, q) => (
                  <div key={q} className='icons-item'>
                    <Img
                      className='icons-item-img'
                      fluid={icon.icon.childImageSharp.fluid}
                      objectFit='CONTAIN'
                      objectPosition='top left'
                    />
                  </div>
                ))}
                <div className='icons-bullit'></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Competences
