require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "Gatsby-Site",
  },
  plugins: [
        {
          resolve: `gatsby-source-contentful`,
          options: {
            spaceId: `0v17hy847w23`,
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
          },
        },
     
  ],
};
