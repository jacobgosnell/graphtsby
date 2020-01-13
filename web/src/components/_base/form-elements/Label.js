import styled from "@emotion/styled";
import _configBase from "../../../configs/_configBase";
import { colors, fonts } from "../../../configs/_configSite";

export default styled.label`
  ${_configBase}
  margin-right: 15px;

  color: ${colors.primary};
  font-family: ${fonts.secondary};
  font-size: 1rem;
  text-wrap: nowrap;
  white-space: nowrap;
`;
