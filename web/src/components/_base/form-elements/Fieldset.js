import styled from "@emotion/styled";
import _configBase from "../../../configs/_configBase";

export default styled.fieldset`
  ${_configBase}

  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
`;
