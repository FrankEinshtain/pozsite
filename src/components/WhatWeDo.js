import React from 'react'
// import { graphql } from 'gatsby'
import Img from 'gatsby-image'
// import programming from '../img/icons/do_programming.png'
// import automation from '../img/icons/do_automation.png'
// import backend from '../img/icons/do_backend.png'
// import cloud from '../img/icons/do_cloud.png'
// import design from '../img/icons/do_design.png'
// import management from '../img/icons/do_management.png'
// import mobile from '../img/icons/do_mobile.png'
// import monitoring from '../img/icons/do_monitoring.png'
// import support from '../img/icons/do_support.png'
// import team from '../img/icons/do_team.png'

// const whatwedoList = [
//   {
//     name: 'Programming',
//     icon: programming,
//   },
//   {
//     name: 'Systems Building',
//     icon: backend,
//   },
//   {
//     name: 'Cloud & Virtualisation',
//     icon: cloud,
//   },
//   {
//     name: 'Design & UX',
//     icon: design,
//   },
//   {
//     name: 'Mobile Apps',
//     icon: mobile,
//   },
//   {
//     name: 'Automation',
//     icon: automation,
//   },
//   {
//     name: 'Dedicated Team Assembly',
//     icon: team,
//   },
//   {
//     name: 'Monitoring',
//     icon: monitoring,
//   },
//   {
//     name: 'Management',
//     icon: management,
//   },
//   {
//     name: 'Support',
//     icon: support,
//   },
// ]

const WhatWeDo = ({ data }) => {
  console.log('WhatWeDo data:\n', data)
  return (
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
                {/* <img className='what-we-do-img' src={item.icon} /> */}
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// export const query = graphql`
//   query MyQuery {
//     file(relativePath: { eq: "images/corgi.jpg" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `

export default WhatWeDo
