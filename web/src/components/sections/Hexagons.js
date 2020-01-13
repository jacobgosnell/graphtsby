import React, { useEffect } from "react";
// import { PropTypes } from "prop-types";

// Components
import Container from "../layouts/Container";
import SVGHexagon from "../_images/features/SVGHexagon";
import { useStateRef } from "../../utilities/functions";

export default () => {
  const [amount, setAmount] = useStateRef(0);
  const [col, setColAmount] = useStateRef(0);
  // const [row, setRowAmount] = useStateRef(0);
  const hexagonWidth = 176;
  const hexagonHeight = 200;
  const hexagons = [];

  useEffect(() => {
    setColAmount(Math.ceil((window.innerWidth + 300) / hexagonWidth) + 1);

    setAmount(
      Math.ceil((window.innerWidth + 300) / hexagonWidth + 1) *
        Math.ceil((window.innerHeight + 300) / hexagonHeight)
    );
    window.onresize = () => {
      setColAmount(Math.ceil((window.innerWidth + 300) / hexagonWidth));
      setAmount(
        Math.ceil((window.innerWidth + 300) / hexagonWidth + 1) *
          Math.ceil((window.innerHeight + 300) / hexagonHeight)
      );
    };
  });

  let shift = false;

  for (let i = 0; i < amount; i += 1) {
    if (i !== 0 && i % (col - 2) === 0) shift = !shift;
    hexagons.push(
      <SVGHexagon
        id={`hexagon-transition-${i}`}
        className="hexagon-transition-tile"
        cssProp={`
          position: relative;
          overflow: visible;
          height: 200px;
          width: 176px;
          transform: scale(0);
          ${shift ? "left: 88px; top: -51px; height: 98px;" : ""}
          float:left;
          polyline {
            stroke: white;
            stroke-weight: 3px;
          }
        `}
      />
    );
  }

  return (
    <Container
      id="hexagon-image-container"
      height="calc(100vh + 300px)"
      fluid
      position="absolute"
      cssProp="
        z-index: 1000;
        width: calc(100vw + 300px);
        top: -150px;
        left: -150px;
        pointer-events: none;
      "
    >
      {hexagons}
    </Container>
  );
};

// SwipeImagesUp.defaultProps = {
//   progress: 0
// };

// SwipeImagesUp.propTypes = {
//   progress: PropTypes.number
// };

// export default SwipeImagesUp;
