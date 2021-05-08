import { createGlobalStyle } from "styled-components";

export const COLORS = {
  primary: "#121214",
  secondary: "#8257e6",
  third: "#04d361",
  default: "#e1e1e6",
  card: "#262529",
  red: "#ff0000",
};

export const GlobalStyle = createGlobalStyle`
  
  body{
    height : 100vh;
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background-color: ${COLORS.primary};
  }
  svg{
    box-sizing: border-box;
  }
  path{
    cursor: pointer;
  }
  h1,p,h2,h3,h4,li{
    color: ${COLORS.default};
  }
  .inp-modal{
    padding: 10px;
    border-radius: 8px;
    border: none;
  }
  textarea{
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  .box-src{
    position: relative;
    input{
    width: 400px;
    background-color : ${COLORS.card};
    margin-right: 15px;
    padding: 15px;
    border: 1px solid #4d4d4d;
    border-radius: 8px;
    color: ${COLORS.default};
    }
  svg{
      position: absolute;
      right: 40px;
      color: #4d4d4d;
      top: 12px;
      font-size: 24px;
    }
  }
  button{
  }
  .svg-box{
    cursor: pointer;
    position: absolute;
    right:13px;
    top: 13px;
    svg{
      font-size: 25px;
     color: red;
      :hover{
        color: ${COLORS.third};
        transition: 0.5s;
      }
    }
  }
`;
