import React from "react";
// import { PropTypes } from "prop-types";

// Components
import Container from "../layouts/Container";
import Grid from "../layouts/Grid";
import ImgAnimationScroll1 from "../_images/animation-scroll/ImgAnimationScroll1";
import ImgAnimationScroll2 from "../_images/animation-scroll/ImgAnimationScroll2";
import ImgAnimationScroll3 from "../_images/animation-scroll/ImgAnimationScroll3";
import ImgAnimationScroll4 from "../_images/animation-scroll/ImgAnimationScroll4";

export default () => (
  <Container
    id="swipe-up-image-container"
    height="100vh"
    fluid
    position="absolute"
    cssProp="z-index: 1000;"
  >
    <Grid container spacing={0}>
      <Grid id="image-1" item xxs={3}>
        <ImgAnimationScroll1 />
      </Grid>
      <Grid id="image-2" item xxs={3}>
        <ImgAnimationScroll2 />
      </Grid>
      <Grid id="image-3" item xxs={3}>
        <ImgAnimationScroll3 />
      </Grid>
      <Grid id="image-4" item xxs={3}>
        <ImgAnimationScroll4 />
      </Grid>
    </Grid>
  </Container>
);

// Se_ImagesUp.defaultProps = {
//   progress: 0
// };

// Se_ImagesUp.propTypes = {
//   progress: PropTypes.number
// };

// export default Se_ImagesUp;
