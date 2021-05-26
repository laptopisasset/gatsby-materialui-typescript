module.exports = {
  plugins: [
    `gatsby-plugin-typescript`,
    "gatsby-plugin-top-layout",
    `gatsby-plugin-image`,
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
      resolve: "gatsby-plugin-material-ui",
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Arc Development`,
        short_name: `Arc Development`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#0B72B9`,
        display: "minimal-ui",
        icon: `src/images/favicon.png`,
      },
    },
  ],
  siteMetadata: {
    title: "My page",
  },
}
