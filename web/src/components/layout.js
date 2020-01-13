import React from "react";
import PropTypes from "prop-types";
import { Global, css } from "@emotion/core";
import BlackChancery from "../../static/fonts/blackchancery.ttf";

import Header from "./sections/Header";

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        body {
          margin: 0;
        }
        @font-face {
          font-family: "BlackChancery";
          src: url(${BlackChancery}) format("truetype");
          font-weight: normal;
          font-style: normal;
        }
      `}
    />
    <Header />
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
