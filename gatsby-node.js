const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

/**
 * Adicona um slug para cada post
 */
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === 'MarkdownRemark') {
    // Use `createFilePath` to turn markdown files in our `pages` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'pages',
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: 'slug',
      value: `/${slug.slice(12)}`,
    })
  }
}

/**
 * Criação da Página dos posts baseado no slug
 */
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

  return graphql(
    `
      query PostList {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                background
                category
                date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
                description
                title
              }
              timeToRead
              fields {
                slug
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const posts = result.data.allMarkdownRemark.edges

    // Create blog post pages.
    posts.forEach(({ node }) => {
      createPage({
        // Path for this page — required
        path: `${node.fields.slug}`,
        component: blogPostTemplate,
        context: {
          slug: node.fields.slug,
        },
      })
    })

    const postsPerPage = 6
    const numPages = Math.ceil(posts.length / postsPerPage)

    const blogListTemplate = path.resolve(`./src/templates/blog-list.js`)

    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/` : `/page/${index + 1}`,
        component: blogListTemplate,
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage: index + 1,
        },
      })
    })
  })
}
