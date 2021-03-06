import React from "react";
import { css } from "@emotion/core";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: {
            eq: "backgrounds/anana-vestige-logo-wallpaper-background.jpg"
          }
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
          z-index: -1;
          position: absolute !important;
          width: 100%;
          height: 100%;
        `}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
);
