import React from "react";
import { css } from "@emotion/core";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";

const ImgCarouselBackground1 = ({ id }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: {
            eq: "_home/carousel/anana-vestige-home-sitting-on-mountain.png"
          }
        ) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        id={id}
        css={css`
          position: absolute !important;
          width: calc(100% + 4px);
          height: calc(100% + 4px);
          top: -2px;
          left: -2px;
        `}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
);

ImgCarouselBackground1.defaultProps = {
  id: null
};

ImgCarouselBackground1.propTypes = {
  id: PropTypes.string
};

export default ImgCarouselBackground1;
