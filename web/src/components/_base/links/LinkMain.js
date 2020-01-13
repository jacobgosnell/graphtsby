import { Link } from "gatsby";
import styled from "@emotion/styled";
import _configBase from "../../../configs/_configBase";
import { colors, fonts } from "../../../configs/_configSite";

const styles = `
  ${_configBase};
  color: ${colors.gold};
  font-family: ${fonts.secondary};
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.2s;
  &:hover {
    color: ${colors.white};
  }
`;

export const LinkMainInt = styled(Link)`
  ${styles}
`;

export const LinkMainExt = styled.a`
  ${styles}
`;
