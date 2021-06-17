import React from 'react'
import { graphql } from 'gatsby'
import UserContextProvider from '../context/userContext'

import Layout from '../components/layout'
import Hero from '../components/Hero'
import WhatWeDo from '../components/WhatWeDo'
import Records from '../components/Records'
import Competences from '../components/Competences'
import References from '../components/References'
import Choose from '../components/Choose'
import Team from '../components/Team'
import Vacancies from '../components/Vacancies'
import Map from '../components/Map'
import ContactUs from '../components/ContactUs'

export default function IndexPageTemplate({ data }) {
  const {
    hero,
    whatwedo,
    competences,
    map,
    references,
    whychooseus,
    team,
    vacancies,
    contact,
    menu,
    socials,
  } = data.markdownRemark.frontmatter
  return (
    <UserContextProvider>
      <Layout menu={menu} socials={socials}>
        <main id='maintag'>
          <Hero data={hero} />
          <WhatWeDo data={whatwedo} />
          <Records />
          <Competences data={competences} />
          <References data={references} />
          <Choose data={whychooseus} />
          <Team data={team} />
          <Vacancies data={vacancies} />
          <Map data={map} />
          <ContactUs data={contact} />
        </main>
      </Layout>
    </UserContextProvider>
  )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        hero {
          title
          subtitle
          buttonurl
          buttontext
          background {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        whatwedo {
          title
          icon {
            childImageSharp {
              fluid(maxWidth: 200) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        competences {
          title
          icons {
            icon {
              childImageSharp {
                fluid(maxHeight: 50, fit: CONTAIN) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
        references {
          referencelist {
            text
            name
            position
            photo {
              childImageSharp {
                fluid(maxWidth: 150) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          buttonurl
          buttontext
        }
        whychooseus {
          text
          textbold
          buttonurl
          buttontext
        }
        team {
          name
          position
          photo {
            childImageSharp {
              fluid(maxWidth: 150) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        vacancies {
          title
          image
          advantages {
            item
          }
          vacancylist {
            icon
            title
            bullit
            buttonurl
            buttontext
            requirements {
              item
            }
          }
        }
        map {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        contact {
          buttonurl
          buttontext
          contactimage {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        slug
        socials {
          icon {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          url
        }
        menu {
          title
          url
        }
      }
    }
  }
`
