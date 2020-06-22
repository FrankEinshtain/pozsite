module.exports = {
  siteMetadata: {
    title: `Pozitiff Site`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/img`,
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
