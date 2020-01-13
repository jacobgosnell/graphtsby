import styled from "@emotion/styled";
import ImgDownCarrot from "../../../images/accents/down-carrot.svg";
import _configBase from "../../../configs/_configBase";
import { colors, fonts } from "../../../configs/_configSite";

export default styled.select`
  ${_configBase}
  border: none;

  padding: 5px 5px;
  color: ${colors.primary};
  font-family: ${fonts.primary};
  font-size: 1rem;

  background: url(${ImgDownCarrot}) no-repeat 98% center/10px, #ffffff;
  cursor: pointer;
`;
