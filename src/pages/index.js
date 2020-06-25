import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
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

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query IndexPageQuery {
        site {
          siteMetadata {
            title
          }
        }
        markdownRemark {
          frontmatter {
            hero {
              title
              subtitle
              buttonurl
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
                    fluid(maxWidth: 800) {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
              buttonurl
            }
            whychooseus {
              text
              textbold
              buttonurl
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
            contactimage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            slug
          }
        }
      }
    `}
    render={(data) => {
      console.log('data:\n', data)
      const {
        hero,
        whatwedo,
        competences,
        map,
        references,
        whychooseus,
        team,
        vacancies,
        contactimage,
      } = data.markdownRemark.frontmatter
      return (
        <>
          <Layout>
            <main>
              <Hero data={hero} />
              <WhatWeDo data={whatwedo} />
              <Records />
              <Competences data={competences} />
              <References data={references} />
              <Choose data={whychooseus} />
              <Team data={team} />
              <Vacancies data={vacancies} />
              <Map data={map} />
              <ContactUs data={contactimage} />
            </main>
          </Layout>
        </>
      )
    }}
  />
)

export default IndexPage
