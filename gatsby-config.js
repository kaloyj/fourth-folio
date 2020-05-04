module.exports = {
  siteMetadata: {
    title: `Carlo Janea | Frontend Engineer`,
    description: `Carlo Janea's portfolio (experience, skills, blog)`,
    author: `@carlojanea`,
  },
  plugins: [
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
        name: `Carlo Janea's Portfolio`,
        short_name: `cjanea-portfolio`,
        start_url: `/`,
        background_color: `#101112`,
        theme_color: `#47FF0C`,
        display: `minimal-ui`,
      },
    },
    "gatsby-plugin-emotion",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["Poppins:200,400,700", "Source Code Pro:400,700"],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
