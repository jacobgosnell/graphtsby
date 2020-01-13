// const { createFilePath } = require(`gatsby-source-filesystem`);
// const { fmImagesToRelative } = require("gatsby-remark-relative-images");
// const path = require("path");

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions;
//   fmImagesToRelative(node);
//   if (node.internal.type === `MarkdownRemark`) {
//     const slug = createFilePath({ node, getNode, basePath: `pages` });
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug
//     });
//   }
// };

// exports.createPages = async ({ actions, graphql }) => {
//   const { createPage } = actions;
//   const blogStoriesOfCareTemplate = path.resolve(
//     "src/templates/TestTemplate.js"
//   );

//   const result = await graphql(`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//           next {
//             fields {
//               slug
//             }
//           }
//           previous {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `);
//   result.data.allMarkdownRemark.edges.forEach(({ node, next, previous }) => {
//     createPage({
//       path: node.fields.slug,
//       component: blogStoriesOfCareTemplate,
//       context: {
//         next,
//         slug: node.fields.slug,
//         previous
//       }
//     });
//   });
// };
