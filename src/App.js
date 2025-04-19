import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import AboutUsPage from "./components/AboutUsPage/AboutUsPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Outlet />
    </div>
  );
}

export default App;
