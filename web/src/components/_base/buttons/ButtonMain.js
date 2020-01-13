import styled from "@emotion/styled";
import _configBase from "../../../configs/_configBase";
import { colors, fonts } from "../../../configs/_configSite";

export default styled.button`
  ${_configBase}
  border: none;

  background-color: #ffffff;
  color: ${colors.primary};
  font-family: ${fonts.secondary};
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #ffffff;
    color: #000000;
    border-color: #000000;
  }
`;
