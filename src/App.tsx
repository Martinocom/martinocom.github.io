import { BrowserRouter } from "react-router-dom";
import './App.scoped.css';
import { Content } from "./pages/Content/Content";
import NavMenu from "./pages/NavMenu/NavMenu";

function App() {
  return (
    <BrowserRouter>
      <NavMenu />
      <Content />
    </BrowserRouter>
  );
}

export default App;
