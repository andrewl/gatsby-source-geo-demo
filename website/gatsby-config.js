module.exports = {
  pathPrefix: `/gatsby-source-geo-demo`,
  siteMetadata: {
    title: `Gatsby Geo Source Demo`,
    description: `Demo for gatsby-source-geo`,
    author: `@andrewl`,
  },
  plugins: [
    {
      resolve: `gatsby-source-geo`,
      options: {
        path: `../data/approved-establishments.shp`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
