import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import PropTypes from "prop-types";
import { mediaQueries } from "../../configs/_configSite";

const ContainerElement = styled.section`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
`;

const Container = ({
  id,
  cssProp,
  position,
  height,
  background,
  vCenter,
  hCenter,
  fluid,
  children
}) => (
  <ContainerElement
    id={id}
    css={css`
    ${cssProp}
    position: ${position};
    ${hCenter || vCenter ? "display: flex;" : ""}
    ${hCenter ? "justify-content: center;" : ""}
    ${vCenter ? "align-items: center;" : ""}
    height: ${height};
    background: ${background};
    ${
      !fluid
        ? `@media(min-width: ${mediaQueries.xl}px) { 
          max-width: ${mediaQueries.xl}px;
        }`
        : ""
    }
    ${
      !fluid
        ? Object.values(mediaQueries)
            .reverse()
            .map(
              (query, i, mqs) => `@media(max-width: ${query}px) {
                  max-width: ${mqs[i + 1]}px;
                }`
            )
        : ""
    }`}
  >
    {children}
  </ContainerElement>
);

Container.defaultProps = {
  id: "",
  cssProp: "",
  position: "relative",
  height: "auto",
  background: "",
  vCenter: false,
  hCenter: false,
  fluid: false,
  children: <></>
};

Container.propTypes = {
  id: PropTypes.string,
  cssProp: PropTypes.string,
  position: PropTypes.string,
  height: PropTypes.string,
  background: PropTypes.string,
  vCenter: PropTypes.bool,
  hCenter: PropTypes.bool,
  fluid: PropTypes.bool,
  children: PropTypes.node
};

export default Container;
