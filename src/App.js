import Routes from "./routes";
import GlobalStyle from "./styles/index";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes />
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}

export default App;
