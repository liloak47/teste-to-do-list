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
`;
export const Title = styled.h1`
  margin: 0;
  font-size: 60px;
  b {
    color: ${COLORS.third};
  }
`;
