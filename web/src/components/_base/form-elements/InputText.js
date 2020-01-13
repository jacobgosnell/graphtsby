import styled from "@emotion/styled";
import _configBase from "../../../configs/_configBase";
import { colors, fonts } from "../../../configs/_configSite";

export default styled.input`
  ${_configBase}
  
  color: ${colors.colorBlack};
  font-family: ${fonts.secondary};
  font-size: 1rem;
  font-weight: regular;
  width: 100%;
  height: 30px;

  &:focus,
  &:-webkit-autofill {
    + label {
      color: #00BEDB;
      top: -27px;
      font-size: 0.875em;
      left: 0;
    }
  }
`;
