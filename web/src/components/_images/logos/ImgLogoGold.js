import React from "react";
import { css } from "@emotion/core";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "logos/anana-vestige-logo-gold.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        css={css`
          width: 100%;
          pointer-events: none;
        `}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
);
