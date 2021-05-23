const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allContentfulProduct {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.allContentfulProduct.nodes.forEach(data => {
    createPage({
      path: `/product/${data.slug}`,
      component: path.resolve("./src/template/productTemplate.js"),
      context: {
        slug: data.slug,
      },
    })
  })
}
