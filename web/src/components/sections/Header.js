import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const Header = styled.div`
  width: 100%;
  height: 170px;
  background-color: #3d9970;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function() {
  return (
    <Header>
      <h1>GRANDStack App</h1>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/contact">contact</Link>
    </Header>
  );
}
