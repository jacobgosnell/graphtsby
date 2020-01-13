import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import PropTypes from "prop-types";
import { mediaQueries } from "../../configs/_configSite";

const GridContainer = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const GridItem = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
`;

const Grid = ({
  id,
  cssProp,
  getRef,
  background,
  children,
  container,
  item,
  spacing,
  xxs,
  xs,
  sm,
  md,
  lg,
  xl,
  xxsOffset,
  xsOffset,
  smOffset,
  mdOffset,
  lgOffset,
  xlOffset,
  xxsOrder,
  xsOrder,
  smOrder,
  mdOrder,
  lgOrder,
  xlOrder
}) => {
  if (container) {
    return (
      <GridContainer
        id={id}
        ref={getRef !== null ? el => getRef(el) : null}
        css={css`
          ${cssProp};
          background: ${background};
          grid-gap: ${spacing * 5}px;
        `}
      >
        {children}
      </GridContainer>
    );
  }
  if (item) {
    const mediaQueriesParams = [xxs, xs, sm, md, lg, xl];
    const mediaQueriesOffsetParams = [
      xxsOffset,
      xsOffset,
      smOffset,
      mdOffset,
      lgOffset,
      xlOffset
    ];
    const mediaQueriesOrderParams = [
      xxsOrder,
      xsOrder,
      smOrder,
      mdOrder,
      lgOrder,
      xlOrder
    ];

    return (
      <GridItem
        id={id}
        ref={getRef !== null ? el => getRef(el) : null}
        css={css`
          ${cssProp};
          background: ${background};
          ${mediaQueriesParams.map((query, i) => {
            let queryCSS = "";
            let columnString = "grid-column: ";
            let offsetParamNumber = 0;

            // CSS builders
            mediaQueriesOffsetParams.every((offsetParam, j) => {
              if (offsetParam > 0) {
                offsetParamNumber = offsetParam + 1;
                columnString += offsetParamNumber;
              }
              if (i === j) return false;
              return true;
            });
            if (offsetParamNumber > 0 && query > 0) columnString += " / ";
            if (query !== 0) columnString += `span ${query};`;
            if (mediaQueriesOffsetParams[i] > 0 || query > 0)
              queryCSS += columnString;
            if (mediaQueriesOrderParams[i] > 0)
              queryCSS += `order: ${mediaQueriesOrderParams[i]};`;

            // Return statements
            if (i > 0) {
              return `@media(min-width: ${Object.values(mediaQueries)[i]}px) {
                ${queryCSS}
              }`;
            }
            return `
                ${queryCSS}
              `;
          })}
        `}
      >
        {children}
      </GridItem>
    );
  }

  return <></>;
};

Grid.defaultProps = {
  id: null,
  cssProp: "",
  getRef: null,
  background: "",
  children: <></>,
  container: false,
  item: false,
  spacing: 1,
  xxs: 0,
  xs: 0,
  sm: 0,
  md: 0,
  lg: 0,
  xl: 0,
  xxsOffset: 0,
  xsOffset: 0,
  smOffset: 0,
  mdOffset: 0,
  lgOffset: 0,
  xlOffset: 0,
  xxsOrder: 0,
  xsOrder: 0,
  smOrder: 0,
  mdOrder: 0,
  lgOrder: 0,
  xlOrder: 0
};

Grid.propTypes = {
  id: PropTypes.string,
  cssProp: "",
  getRef: PropTypes.func,
  background: PropTypes.string,
  children: PropTypes.node,
  container: PropTypes.bool,
  item: PropTypes.bool,
  spacing: PropTypes.number,
  xxs: PropTypes.number,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  xxsOffset: PropTypes.number,
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  xlOffset: PropTypes.number,
  xxsOrder: PropTypes.number,
  xsOrder: PropTypes.number,
  smOrder: PropTypes.number,
  mdOrder: PropTypes.number,
  lgOrder: PropTypes.number,
  xlOrder: PropTypes.number
};

export default Grid;
