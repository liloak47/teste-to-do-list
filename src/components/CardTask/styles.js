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
  padding: 10px;
  position: relative;
  h1 {
    text-align: center;
  }
  .id-task {
    position: absolute;
    top: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 13px;
    p {
      border: 1px solid ${COLORS.third};
      border-radius: 50%;
      padding: 5px;
      height: 10px;
      width: 10px;
      color: ${COLORS.third};
      font-size: 10px;
    }
  }
  .done {
    color: ${COLORS.third};
  }
  .close {
    position: absolute;
    right: 2px;
  }
`;
