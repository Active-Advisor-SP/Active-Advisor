import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Search } from "@mui/icons-material";
import "./navbar.css";




function NavbarComponent() {
  return (
      <>
      <Navbar collapseOnSelect expand="lg" className="navbar" data-bs-theme="dark">
        <div className="navbarContainer">
          <div className="navbarLeft">
            <Navbar.Brand href="#home">
              <img
                className="navbarLogo"
                src="/activeadvisor.jpg"
                alt="Active Advisor Logo"
                width={70}
              />
            </Navbar.Brand>
          </div>

          <div className="navbarCenter">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
              <Nav.Link className="navLink" href="#home" >
                Home
              </Nav.Link>
              <Nav.Link to="/about" className="navLink" href="#aboutUs">
                About Us
              </Nav.Link>
              <Nav.Link className="navLink" href="#communities">
                Communities
              </Nav.Link>
              <Nav.Link className="navLink" href="#contact">
                Contact
              </Nav.Link>
            </Nav>
        </Navbar.Collapse>
            
          </div>

          <div className="navbarRight">
            <div className="searchBar">
              <Search />
              <input placeholder="Search.." className="searchInput" />
            </div>
          </div>
          <div className="navbarButtons">
            <button id="btn1">Log In</button>
            <button id="btn2">Sign Up</button>
          </div>
        </div>
      </Navbar>
    </>
    
  );
}

export default NavbarComponent;
