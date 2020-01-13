import styled from "@emotion/styled";
import _configBase from "../../../configs/_configBase";
import { colors, fonts } from "../../../configs/_configSite";

export default styled.option`
  ${_configBase}
  color: ${colors.colorDarkGrey};
  font-family: ${fonts.primary};
  font-size: 1rem;
`;
