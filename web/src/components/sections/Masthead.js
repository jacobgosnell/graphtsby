import React from "react";
// import { PropTypes } from "prop-types";

// Components
import Container from "../layouts/Container";
import ImgBackgroundLeaves from "../_images/backgrounds/ImgBackgroundLeaves";
import SVGLogoWords from "../_images/logos/SVGLogoWords";
import LineGrow from "../animations/LineGrow";

export default () => (
  <Container height="100vh" vCenter hCenter fluid>
    <ImgBackgroundLeaves />
    <SVGLogoWords cssProp="position: absolute;" />
    <LineGrow color="#FFFCEF" />
  </Container>
);

// Masthead.defaultProps = {
//   progress: 0
// };

// Masthead.propTypes = {
//   progress: PropTypes.number
// };

// export default Masthead;
