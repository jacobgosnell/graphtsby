import { Link } from "gatsby";
import styled from "@emotion/styled";
import _configBase from "../../../configs/_configBase";
import { colors, fonts } from "../../../configs/_configSite";

const styles = `
  ${_configBase};
  color: ${colors.colorWhite};
  font-family: ${fonts.secondary};
  font-size: 1rem;
`;

export const LinkMainInt = styled(Link)`
  ${styles}
`;

export const LinkMainExt = styled.a`
  ${styles}
`;
