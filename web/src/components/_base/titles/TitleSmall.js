import styled from "@emotion/styled";
import _configBase from "../../../configs/_configBase";
import { colors, fonts } from "../../../configs/_configSite";

export default styled.h1`
  ${_configBase}
  position: relative;
  color: ${colors.white};
  font-family: ${fonts.primary};
  font-weight: 100;
  font-size: 1.5rem;
`;
