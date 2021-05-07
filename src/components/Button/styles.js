import styled from "styled-components";
import { COLORS } from "../../global/style";

export const Button = styled.button`
  border: none;
  background-color: ${COLORS.secondary};
  padding: 15px 60px;
  border-radius: 8px;
  color: ${COLORS.default};
  cursor: pointer;

  :hover {
    filter: brightness(0.9);
    transition: 1s;
  }
`;
