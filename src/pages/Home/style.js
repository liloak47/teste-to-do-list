import styled from "styled-components";
import { COLORS } from "../../global/style";

export const BoxMain = styled.div`
  border: 1px solid #262529;
  margin: 0 400px;
  border-radius: 16px;
  padding: 40px 100px;

  .group-one {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 0 100px;
  }
  .box-create {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    p {
      width: 100%;
      line-height: 30px;
      max-width: 200px;
      margin: 20px;
      text-align: left;
    }
  }
  .group-one {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin-top: 50px;
  }
  @media only screen and (max-width: 768px) {
    padding: 20px 20px;
    margin: 0;

    .box-create {
      p {
        line-height: 20px;
      }
      button {
        font-size: 18px;
        padding: 30px 60px;
      }
    }
  }
`;

export const Title = styled.h1`
  @media only screen and (max-width: 768px) {
    font-size: 40px;
  }
  margin: 0;
  font-size: 60px;
  b {
    color: ${COLORS.third};
  }
`;
