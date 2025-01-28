import { BrowserRouter } from "react-router-dom";

import "./App.scoped.css";
import { Content } from "./pages/Content/Content";
import NavMenu from "./pages/NavMenu/NavMenu";

function App() {
  return (
    <BrowserRouter>
      <Content />
    </BrowserRouter>
  );
}

// eslint-disable-next-line import/no-default-export
export default App;
