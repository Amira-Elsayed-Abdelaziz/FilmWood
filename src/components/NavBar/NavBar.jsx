import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "react-bootstrap/Image";
import "./NavBar.css";
import logo from "./../assets/logo.png";
import { Link, Routes, Route} from "react-router-dom";
import SignUpPage from "../SignUpPage/SignUpPage";
import HomePage from "../HomePage/HomePage";
import AboutUsPage from "../AboutUsPage/AboutUsPage";
import ContactUsPage from "../ContactUsPage/ContactUsPage";
import LoginPage from "../LoginPage/LoginPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import ErrorPage from "../ErrorPage/ErrorPage";

function NavBar() {
  const expand = "md";
  return (
    <>
      <Navbar
        key={expand}
        expand={expand}
        className=" navbar navbar-border"
        fixed="top" 
        variant="dark"
      >
        <Container fluid>
          <Navbar.Brand href="#" data-bs-theme="dark">
            <Image src={logo} className="logo" />
            FilmWood
          </Navbar.Brand>
          <Navbar.Toggle className="text-white" aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end" 
          >
            <Offcanvas.Header data-bs-theme="dark" closeButton
             className="navbar">
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="text-white">
                <Image src={logo} className="logo" /> FilmWood
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="nav-on-offcanvas-body">
              <Nav className="nav-on-offcanvas justify-content-between flex-grow-1 pe-3 align-items-baseline ">
                <div className="d-flex justify-content-center flex-fill">
                  <Nav.Link className="text-white" to="/">
                    <Link className="link-no-decoration" to="/">
                      Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="text-white">
                    <Link className="link-no-decoration" to="/Profile">
                      Profile
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="text-white">
                    <Link className="link-no-decoration" to="/About-us">
                      About Us
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="text-white">
                    <Link className="link-no-decoration" to="/Contact-us">
                      Contact Us
                    </Link>
                  </Nav.Link>
                </div>
                <div className="d-flex ">
                  <button className="btn btn-one me-1">
                    <Nav.Link className="text-white">
                      <Link className="link-no-decoration" to="/Sign-up">
                        Sign Up
                      </Link>
                    </Nav.Link>
                  </button>
                  <button className="btn btn-two ">
                    <Nav.Link className="text-white">
                      <Link className="link-no-decoration" to="/Login">
                        Login
                      </Link>
                    </Nav.Link>
                  </button>
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      {/* <nav>
        <Link to="/"> Home</Link>
        <Link to="/About"> Blog</Link>
        <Link to="/Contact-us"> Profile</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About-us" element={<AboutUsPage />} />
        <Route path="/Contact-us" element={<ContactUsPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/Sign-up" element={<SignUpPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default NavBar;
