import React from "react";
import { css } from "@emotion/core";
import PropTypes from "prop-types";

const SVGGoldCrown = ({ returnRef, cssProp }) => (
  <svg
    ref={el => {
      returnRef(el);
    }}
    css={css`
      ${cssProp}
    `}
    width="134"
    height="110"
    viewBox="0 0 134 110"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M41.4952 60.7945C41.6786 35.1383 70.5877 2 70.5877 2C70.5877 2 103.706 26.9943 103.409 58.202C103.409 80.4916 88.333 95.4059 75.5791 107.62L75.5777 107.622L75.5749 107.624C74.026 109.108 72.5074 110.562 71.0488 112C70.518 111.657 69.954 111.3 69.362 110.925C59.326 104.572 41.2716 93.142 41.4952 60.7945ZM48.3894 75.679L70.0165 98.4828L70.3271 83.4347L46.4811 57.6463C46.5287 64.1906 47.1627 70.7843 48.3894 75.679ZM47.8714 49.2643L70.5276 73.064L70.8382 58.0159L52.3733 36.8771C50.5067 40.5324 48.9877 45.441 47.8714 49.2643ZM56.8768 30.7505L71.0386 47.6452L71.3064 31.4394L62.3756 21.8397C61.0686 23.5622 60.0838 25.286 59.0442 27.1057C58.3776 28.2727 57.6881 29.4795 56.8768 30.7505Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M107.413 107.923C119.561 103.454 139.549 84.8842 137.905 85.4453C138.235 84.8086 104.237 90.0986 98.5668 94.3783C94.8258 97.1765 91.3652 107.063 91.3652 107.063C91.3652 107.063 103.184 109.491 107.413 107.923Z"
        fill="url(#paint1_linear)"
      />
      <path
        d="M4.09947 78.1445C2.52986 77.383 19.8907 98.8487 31.1567 105.007C35.1381 107.266 47.1788 106.6 47.1788 106.6C47.1788 106.6 45.0563 96.1735 41.7823 92.9253C36.614 87.804 3.70285 77.4816 4.09947 78.1445Z"
        fill="url(#paint2_linear)"
      />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="0"
        y="0"
        width="142"
        height="118"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="2" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear"
        x1="71"
        y1="2"
        x2="71"
        y2="112"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFEA7B" />
        <stop offset="0.609275" stopColor="#FFFBFB" />
        <stop offset="0.609375" stopColor="#D7B401" />
        <stop offset="0.8125" stopColor="#FFDB5B" />
        <stop offset="1" stopColor="#A08A15" />
      </linearGradient>
      <linearGradient
        id="paint1_linear"
        x1="71"
        y1="2"
        x2="71"
        y2="112"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFEA7B" />
        <stop offset="0.609275" stopColor="#FFFBFB" />
        <stop offset="0.609375" stopColor="#D7B401" />
        <stop offset="0.8125" stopColor="#FFDB5B" />
        <stop offset="1" stopColor="#A08A15" />
      </linearGradient>
      <linearGradient
        id="paint2_linear"
        x1="71"
        y1="2"
        x2="71"
        y2="112"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFEA7B" />
        <stop offset="0.609275" stopColor="#FFFBFB" />
        <stop offset="0.609375" stopColor="#D7B401" />
        <stop offset="0.8125" stopColor="#FFDB5B" />
        <stop offset="1" stopColor="#A08A15" />
      </linearGradient>
    </defs>
  </svg>
);

SVGGoldCrown.defaultProps = {
  returnRef: () => {},
  cssProp: ""
};

SVGGoldCrown.propTypes = {
  returnRef: PropTypes.func,
  cssProp: PropTypes.string
};

export default SVGGoldCrown;
