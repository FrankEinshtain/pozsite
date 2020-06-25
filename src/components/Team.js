import React from 'react'
import Img from 'gatsby-image'

const Team = ({ data }) => (
  <section id='team' className='team'>
    <div className='container'>
      <div className='inner'>
        <h3>Our Team</h3>
        <div className='team-list'>
          {data.map((item, i) => (
            <div key={i} className='team-member'>
              <Img
                className='team-member-img'
                fluid={item.photo.childImageSharp.fluid}
              />
              <h4>{item.name}</h4>
              <p>{item.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Team
