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
            eq: "_home/content-toggle/anana-vestige-content-toggle-3.png"
          }
        ) {
          childImageSharp {
            fixed(width: 375) {
              ...GatsbyImageSharpFixed
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
          top: -40px;
          left: 0;
        `}
        fixed={data.placeholderImage.childImageSharp.fixed}
      />
    )}
  />
);
