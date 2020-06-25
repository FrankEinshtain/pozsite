import React from 'react'
// import { graphql } from 'gatsby'
// import Img from 'gatsby-image'

// import Layout from '../components/layout'
// import Hero from '../components/Hero'
// import WhatWeDo from '../components/WhatWeDo'
// import Records from '../components/Records'
// import Competences from '../components/Competences'
// import References from '../components/References'
// import Choose from '../components/Choose'
// import Vacancies from '../components/Vacancies'
// import Map from '../components/Map'
// import ContactUs from '../components/ContactUs'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className='blog-post-container'>
      <div className='blog-post'>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className='blog-post-content'
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}
// export const pageQuery = graphql`
//          query($slug: String!) {
//            markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//              html
//              frontmatter {
//                slug
//                hero {
//                  title
//                  subtitle
//                  buttonurl
//                  background {
//                    childImageSharp {
//                      fluid(maxWidth: 800) {
//                        ...GatsbyImageSharpFluid
//                      }
//                    }
//                  }
//                }
//                whatwedo {
//                 title
//                 icon {
//                   childImageSharp {
//                     fluid(maxWidth: 800) {
//                       ...GatsbyImageSharpFluid
//                     }
//                   }
//                 }
//                }
//                competences {
//                  title
//                  icon {
//                    icon {
//                      childImageSharp {
//                        fluid(maxWidth: 800) {
//                          ...GatsbyImageSharpFluid
//                        }
//                      }
//                    }
//                  }
//                }
//                references {
//                  referencelist {
//                    text
//                    name
//                    position
//                    photo
//                  }
//                  buttonurl
//                }
//                whychooseus {
//                  text
//                  textbold
//                  buttonurl
//                }
//                vacancies {
//                  title
//                }
//                map
//                contactimage
//                slug
//              }
//            }
//          }
//        `
