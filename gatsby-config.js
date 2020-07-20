const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `To-do app`,
    siteUrl: `https://ys-todo-app.netlify.app`,
    description: `To-do list web application`,
    image: `/images/todos.png`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: false,
        defaultQuality: 85,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Todo List App`,
        short_name: `Todo App`,
        start_url: `/`,
        background_color: `#e8eaf6`,
        theme_color: `#3f51b5`,
        display: `minimal-ui`,
        icon: `src/images/todos.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
    {
      resolve: "gatsby-plugin-brotli",
      options: {
        extensions: ["css", "html", "js", "svg"],
      },
    },
  ],
};
