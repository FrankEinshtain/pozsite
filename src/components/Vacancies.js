import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import VacSlider from './VacSlider'

const Vacancies = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
              author
            }
          }
          markdownRemark {
            frontmatter {
              vacancylist {
                icon
                title
                bullit
                buttonurl
                buttontext
                link
                requirements {
                  item
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        // console.log(
        //   'static vacancy:',
        //   data.markdownRemark.frontmatter.vacancylist
        // )
        return (
          data.markdownRemark.frontmatter.vacancylist && (
            <section id='vacancies' className='vacancies'>
              <div className='container'>
                <div className='inner'>
                  <h3>Vacancies</h3>
                  <div className='content'>
                    <div className='content-advantages'>
                      <h4>
                        Get to know us and join our team. We'd love to have more
                        talented, enthusiastic, and creative people on board.
                        Check out our open positions!
                      </h4>
                    </div>
                    <div className='content-slider'>
                      <VacSlider
                        data={data.markdownRemark.frontmatter.vacancylist}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        )
      }}
    />
  )
}

export default Vacancies
