import PropTypes from "prop-types";
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/core";

const spinning = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359.99deg);
  }
`;

const LoadingIndicator1 = ({ color }) => (
  <div
    css={css`
      height: 17px;
      width: 17px;
      border: 3px solid #eeeeee;
      border-top: 3px solid ${color};
      border-radius: 50%;
      animation: ${spinning} 1s ease infinite;
    `}
  />
);

LoadingIndicator1.defaultProps = {
  color: "#000000"
};

LoadingIndicator1.propTypes = {
  color: PropTypes.string
};

export default LoadingIndicator1;
