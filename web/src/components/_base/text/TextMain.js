import styled from "@emotion/styled";
import _configBase from "../../../configs/_configBase";
import { colors, fonts } from "../../../configs/_configSite";

export default styled.p`
  ${_configBase};
  color: ${colors.lightGray};
  font-family: ${fonts.tertiary};
  font-size: 1.25rem;
  line-height: 1.5;
  text-align: justify;
  margin-bottom: 30px;
`;
