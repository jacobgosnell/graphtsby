require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: "Anana Vestige",
    description: "[]",
    author: "Hangar 31",
    siteUrl: "https://localhost:8000"
  },
  plugins: [
    // Blog Image Sourcing
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images-blog",
        path: `${__dirname}/static/assets`
      }
    },
    // Image Sourcing
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images-src",
        path: `${__dirname}/src/images`
      }
    },
    // Blog Folder Sourcing
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog-test",
        path: `${__dirname}/static/test-folder`
      }
    },
    // Creates a manifest for the website
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Anana Vestige",
        short_name: "Anana Vestige",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#000000",
        display: "minimal-ui",
        icon: "src/images/logos/anana-vestige-logo-gold.png"
      }
    },
    // Loads web fonts from Google as specified
    {
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: `Blinker`,
            subsets: [`latin`],
            variants: [`300`, `400`, `600`, `700`, `800`, `900`]
          },
          {
            family: `Assistant`,
            subsets: [`latin`],
            variants: [`300`, `400`, `600`, `700`, `800`]
          }
        ]
      }
    },
    // Makes field "markdownRemark" queryable
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600
            }
          }
        ]
      }
    },
    // Emotion plugin for Gatsby
    `gatsby-plugin-emotion`,

    // Netlify
    "gatsby-plugin-netlify",
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-netlify-cache",

    // Robots TXT
    "gatsby-plugin-robots-txt",

    // Creates a Service Worker for offline use
    "gatsby-plugin-offline",

    // Allows the use of react-helmet within Gatsby
    "gatsby-plugin-react-helmet",

    // Creates ImageSharp nodes for image manipulation within GraphQL queries
    "gatsby-transformer-sharp",

    // Gives additional image processing functions
    "gatsby-plugin-sharp",

    // Gatsby Plugin for linting -- Using AirBNB
    "gatsby-plugin-eslint",

    // Remove the trailing slashes from pathing
    "gatsby-plugin-remove-trailing-slashes"
  ]
};
