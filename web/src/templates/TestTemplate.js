// /* eslint-disable no-underscore-dangle */
// import PropTypes from "prop-types";
// import { graphql } from "gatsby";

// /** @jsx jsx */
// import { jsx } from "@emotion/core";

// // H31 Components
// import Layout from "../components/layout";
// import SEO from "../components/seo";

// const NewsAndEvents = ({ data }) => {
//   const { markdownRemark } = data;
//   const { frontmatter /* ,  html */ } = markdownRemark;

//   return (
//     <Layout>
//       <SEO title={frontmatter.title} description={markdownRemark.excerpt} />
//     </Layout>
//   );
// };

// NewsAndEvents.defaultProps = {
//   data: {}
// };

// NewsAndEvents.propTypes = {
//   data: PropTypes.objectOf(PropTypes.object)
// };

// export default NewsAndEvents;

// export const pageQuery = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       excerpt
//       html
//       fields {
//         slug
//       }
//       frontmatter {
//         title
//         date
//         image {
//           childImageSharp {
//             fluid(maxWidth: 1000) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `;
