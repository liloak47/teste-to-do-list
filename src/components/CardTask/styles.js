import styled from "styled-components";
import { COLORS } from "../../global/style";
export const Card = styled.div`
  background-color: ${COLORS.card};
  width: 100%;
  max-width: 340px;
  height: 240px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
`;
