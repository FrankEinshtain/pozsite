import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import previewImage from '../../static/img/social_preview.png'

const Seo = ({ description, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata?.description
  const defaultTitle = title || site.siteMetadata?.title

  return (
    <Helmet
      title={defaultTitle}
      meta={[
        {
          name: `canonical`,
          content: process.env.GATSBY_SITE_URL,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: process.env.GATSBY_SITE_URL,
        },
        {
          property: `og:title`,
          content: defaultTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: previewImage,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:title`,
          content: defaultTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: previewImage,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
      ]}
    />
  )
}

export default Seo
