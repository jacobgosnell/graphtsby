import styled from "@emotion/styled";
import _configBase from "../../../configs/_configBase";
import { colors, fonts } from "../../../configs/_configSite";

export default styled.button`
  ${_configBase}
  border: none;

  background: none;
  color: ${colors.gold};
  font-family: ${fonts.secondary};
  font-size: 1rem;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  transition: 0.2s;
  text-transform: uppercase;

  &:hover {
    background: #ffffff;
    color: #000000;
    border-color: #000000;
  }
`;
