import React from "react";
import * as ROUTES from "../../constants/routes";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./SohoNavBar.css";
import logo from "./images/SoHo-Logo-No-script3-300x166.png";

const SohoNavbar = () => {
  return (
    <div>
      <Navbar expand="lg" fixed="top" className="n-navbar">
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" className="n-logo1"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href={ROUTES.HOME} className="n-item-none">
              Home
            </Nav.Link>
            <NavDropdown
              title="Blinds"
              id="basic-nav-dropdown"
              className="n-item-none"
            >
              <NavDropdown.Item
                href={ROUTES.BLINDS_ROLLER}
                className="n-item-none"
              >
                Roller
              </NavDropdown.Item>
              <NavDropdown.Item
                href={ROUTES.BLINDS_VENETIAN}
                className="n-item-none"
              >
                Venetian
              </NavDropdown.Item>
              <NavDropdown.Item
                href={ROUTES.BLINDS_VERTICAL}
                className="n-item-none"
              >
                Vertical
              </NavDropdown.Item>
              <NavDropdown.Item
                href={ROUTES.BLINDS_ZEBRA}
                className="n-item-none"
              >
                Zebra
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Curtain"
              id="basic-nav-dropdown"
              className="n-item-none"
            >
              <NavDropdown.Item
                href={ROUTES.CURTAIN_WAVE}
                className="n-item-none"
              >
                Wave
              </NavDropdown.Item>
              <NavDropdown.Item
                href={ROUTES.CURTAIN_EYELET}
                className="n-item-none"
              >
                Eyelet
              </NavDropdown.Item>
              <NavDropdown.Item
                href={ROUTES.CURTAIN_PINCHPLEAT}
                className="n-item-none"
              >
                Pinch Pleat
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Shutter"
              id="basic-nav-dropdown"
              className="n-item-none"
            >
              <NavDropdown.Item
                href={ROUTES.SHUTTER_TIMBER}
                className="n-item-none"
              >
                Timber
              </NavDropdown.Item>
              <NavDropdown.Item
                href={ROUTES.SHUTTER_ALYCOREPLUSPVC}
                className="n-item-none"
              >
                Alycore plus PVC
              </NavDropdown.Item>
              <NavDropdown.Item
                href={ROUTES.SHUTTER_EXTERIOR}
                className="n-item-none"
              >
                Exterior
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href={ROUTES.BUYINGGUIDE} className="n-item-none">
              Buying guide
            </Nav.Link>

            <Nav.Link href={ROUTES.CONTACTUS} className="n-item-none">
              Contact us
            </Nav.Link>

            {/* <Nav.Link href="#home">Home</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default SohoNavbar;
