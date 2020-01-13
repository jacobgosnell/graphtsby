import styled from "@emotion/styled";
import { colors, fonts } from "../../../configs/_configSite";
import _configBase from "../../../configs/_configBase";

export default styled.textarea`
  ${_configBase}
  color: ${colors.colorBlack};
  font-family: ${fonts.secondary};
  font-size: 1rem
  border: none;
  width: 100%;
`;
