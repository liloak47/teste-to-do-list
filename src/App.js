import "./App.css";
import Routes from "./routes";
import { GlobalStyle } from "./global/style";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes />
    </div>
  );
}

export default App;
