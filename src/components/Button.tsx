import styled from "styled-components";
import Button, { ButtonProps } from "@material-ui/core/Button";

export type { ButtonProps };

const StyledButton = styled(Button)`
  font-size: 1em;
  margin: 1em;
  padding: 0.35em 1em;
  border-radius: 14px;
`;

export default StyledButton;
