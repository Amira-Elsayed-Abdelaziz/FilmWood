import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Outlet />
    </div>
  );
}

export default App;
