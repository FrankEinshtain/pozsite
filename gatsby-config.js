const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Pozitiff Site`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
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
        path: `${__dirname}/src/img/icons`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        htmlTitle: `Pozitiff Site Content Manager`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`300`, `500`],
            subsets: [`latin`],
          },
          {
            family: `Rubik`,
            variants: [`300`, `500`],
          },
        ],
      },
    },
  ],
}
