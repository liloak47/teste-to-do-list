import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./global/style";
import Providers from "./providers";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <GlobalStyle />
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);
