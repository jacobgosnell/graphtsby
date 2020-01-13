import styled from "@emotion/styled";
import _configBase from "../../../configs/_configBase";
import { colors } from "../../../configs/_configSite";

export default styled.button`
  ${_configBase}

  display: inline-block;
  padding: 15px 30px;
  color: #ffffff;
  background: ${colors.primary};
  border: 1px solid ${colors.primary};
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    border-color: #ffffff;
    background: #ffffff;
    color: ${colors.primary};
  }
`;
