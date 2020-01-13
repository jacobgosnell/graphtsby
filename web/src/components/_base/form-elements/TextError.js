import styled from "@emotion/styled";
import _configBase from "../../../configs/_configBase";
import { fonts } from "../../../configs/_configSite";

export default styled.p`
  ${_configBase}
  font-family: ${fonts.primary};
  font-size: 1rem;
  color: red;
`;
