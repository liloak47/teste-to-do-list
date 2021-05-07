import styled from "styled-components";
import { COLORS } from "../../global/style";

export const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 400px;
  border: 1px solid ${COLORS.card};
  border-radius: 16px;
`;
