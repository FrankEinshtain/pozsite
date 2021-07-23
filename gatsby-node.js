const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    if (node.frontmatter.vacancylist && !node.frontmatter.vacancylist.length) {
      node.frontmatter.vacancylist.push({
        title: 'crushtest-dummie-stan',
        icon: 'crushtest-dummie-stan',
        bullit: 'crushtest-dummie-stan',
        buttonurl: 'crushtest-dummie-stan',
        buttontext: 'crushtest-dummie-stan',
        link: 'crushtest-dummie-stan',
        requirements: [
          {
            item: 'crushtest-dummie-stan',
          },
        ],
      })
      node.frontmatter.menu = node.frontmatter.menu.filter(
        (item) => item.title !== 'vacancies'
      )
    }

    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  data.allMarkdownRemark.edges.forEach((edge) => {
    const slug = edge.node.fields.slug
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/homepage.js`),
      context: { slug: slug },
    })
  })
}
