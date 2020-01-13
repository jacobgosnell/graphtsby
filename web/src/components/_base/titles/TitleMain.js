import styled from "@emotion/styled";
import _configBase from "../../../configs/_configBase";
import { colors, fonts } from "../../../configs/_configSite";

export default styled.h1`
  ${_configBase}
  color: ${colors.darkGray};
  font-family: ${fonts.primary};
  font-weight: 100;
  font-size: 4rem;
  margin-bottom: 30px;
`;
