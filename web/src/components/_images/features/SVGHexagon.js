import React from "react";
import { css } from "@emotion/core";
import PropTypes from "prop-types";

const SVGHexagon = ({ returnRef, cssProp, id, className }) => (
  <svg
    id={id}
    className={className}
    ref={el => {
      returnRef(el);
    }}
    css={css`
      ${cssProp}
    `}
    width="176"
    height="200"
    fill="#D7B401"
  >
    <polyline
      id="hexagon"
      points="87,0 176,50 176,150 87,200 0,150 0,50 87,0"
    />
  </svg>
);

SVGHexagon.defaultProps = {
  returnRef: () => {},
  cssProp: "",
  id: null,
  className: null
};

SVGHexagon.propTypes = {
  returnRef: PropTypes.func,
  cssProp: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string
};

export default SVGHexagon;
