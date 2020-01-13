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
            eq: "_home/carousel/anana-vestige-home-woman-in-sun-thumb.png"
          }
        ) {
          childImageSharp {
            fluid(maxWidth: 400) {
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
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        `}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
);
