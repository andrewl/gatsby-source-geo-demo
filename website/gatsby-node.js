/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const establishmentTemplate = path.resolve(`src/templates/establishment.js`)
    // Query for recipe nodes to use in creating pages.
    resolve(
      graphql(
        `
{
  allGeoFeature {
    edges {
      node {
        id
        featureFields {
          AppNo
        }
      }
    }
  }
}
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }


        // Create pages for each article.
        result.data.allGeoFeature.edges.forEach(({node}) => {
          let path = "/establishment/" + node.featureFields.AppNo
          createPage({
            path: path,
            component: establishmentTemplate,
            context: {
              AppNo: node.featureFields.AppNo,
            },
          })
        })
      })
    );

  })
}
