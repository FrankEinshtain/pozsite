const path = require(`path`)
require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Pozitiff`,
    description: `Information Technology & Creative Digital Agency`,
    author: `frankie <r.rudchenko@pozitiff.team>`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        formats: [`auto`, `png`, 'jpg'],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown',
        path: path.join(__dirname, `src`, `markdown`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: path.join(__dirname, `src`, `img`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `icons`,
        path: path.join(__dirname, `src`, `img`, `icons`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pozitiff`,
        short_name: `Information Technology & Creative Digital Agency`,
        start_url: `/`,
        icon: `favicon.png`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        htmlTitle: `Pozitiff Site Content Manager`,
      },
    },
  ],
}
