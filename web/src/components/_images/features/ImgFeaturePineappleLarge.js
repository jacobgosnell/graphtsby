import React from "react";
import { css } from "@emotion/core";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "features/anana-vestige-pineapple-large.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        css={css`
          position: absolute !important;
          z-index: 5;
          width: 100%;
          height: 100%;
          pointer-events: none;
        `}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
);
