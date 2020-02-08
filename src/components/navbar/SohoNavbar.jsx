import React from "react";
import "./SohoNavBar.css";
// import { Link } from "react-router-dom";
// import {
//   faPhone,
//   faHome,
//   faAddressBook,
//   faShippingFast,
//   faReceipt
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
// import {
//   Badge,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   Collapse
// } from "shards-react";
import logo from "./images/SoHo-Logo-No-script3-300x166.png";

import { connect } from "react-redux";
// import { menuTypes } from "../../constants/menuTypes";
import * as ROUTES from "../../constants/routes";

const SohoNavbar = props => {
  // const { menu } = props;
  // const [collapseOpen, setCollapseOpen] = useState(false);
  // const [dropdownOpen, setDropdownOpen] = useState(false);

  // const handleDropDownOpen = () => {
  //   setDropdownOpen(!dropdownOpen);
  // };

  // const handleCollapseOpen = () => {
  //   setCollapseOpen(!collapseOpen);
  // };

  // const handleMenuClick = () => {
  //   setCollapseOpen(false);
  // };

  return (
    <div>
      {/* <Navbar className="n-navbar" expand="md"></Navbar> */}

      {/* <Nav className="navbar navbar-default"></Nav> */}

      <Navbar
        // style={{ marginBottom: "0" }}
        // style={{ backgroundColor: "#071740", position: "sticky" }}
        className="n-navbar"
        expand="md"
        fixed="top"
        // variant="light"
      >
        <Navbar.Brand href={ROUTES.HOME}>
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
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
    </div>

    // <Navbar
    //   className="n-navbar"
    //   type="light"
    //   // type="dark"
    //   // theme="success"
    //   expand="md"
    //   sticky="top"
    // >
    //   <NavbarBrand>
    //     <img src={logo} alt="logo" className="n-logo1"></img>
    //   </NavbarBrand>
    //   <NavbarToggler onClick={handleCollapseOpen} />
    //   <Collapse open={collapseOpen} navbar>
    //     <Nav navbar>
    //       <NavItem className="n-item">
    //         <NavLink
    //           to="/"
    //           tag={Link}
    //           exact
    //           active={menu === menuTypes.HOME}
    //           onClick={() => {
    //             handleMenuClick();
    //           }}
    //           className={
    //             menu === menuTypes.HOME ? "n-item-active" : "n-item-none"
    //           }
    //         >
    //           <FontAwesomeIcon icon={faHome} /> Home
    //         </NavLink>
    //       </NavItem>
    //       <NavItem className="n-item">
    //         <NavLink
    //           to="/product"
    //           tag={Link}
    //           // exact
    //           active={menu === menuTypes.PRODUCT}
    //           onClick={() => {
    //             handleMenuClick();
    //           }}
    //           className={
    //             menu === menuTypes.PRODUCT ? "n-item-active" : "n-item-none"
    //           }
    //         >
    //           <FontAwesomeIcon icon={faReceipt} /> Product
    //         </NavLink>
    //       </NavItem>

    //       <NavItem className="n-item">
    //         <NavLink
    //           to="/quote-my-job"
    //           tag={Link}
    //           // exact
    //           active={menu === menuTypes.QUOTE}
    //           onClick={() => {
    //             handleMenuClick();
    //           }}
    //           className={
    //             menu === menuTypes.QUOTE ? "n-item-active" : "n-item-none"
    //           }
    //         >
    //           <FontAwesomeIcon icon={faShippingFast} /> Blinds
    //         </NavLink>
    //       </NavItem>
    //       <NavItem className="n-item">
    //         <NavLink
    //           to="/quote-my-job"
    //           tag={Link}
    //           // exact
    //           active={menu === menuTypes.QUOTE}
    //           onClick={() => {
    //             handleMenuClick();
    //           }}
    //           className={
    //             menu === menuTypes.QUOTE ? "n-item-active" : "n-item-none"
    //           }
    //         >
    //           <FontAwesomeIcon icon={faShippingFast} /> Curtain
    //         </NavLink>
    //       </NavItem>
    //       <NavItem className="n-item">
    //         <NavLink
    //           to="/quote-my-job"
    //           tag={Link}
    //           // exact
    //           active={menu === menuTypes.QUOTE}
    //           onClick={() => {
    //             handleMenuClick();
    //           }}
    //           className={
    //             menu === menuTypes.QUOTE ? "n-item-active" : "n-item-none"
    //           }
    //         >
    //           <FontAwesomeIcon icon={faShippingFast} /> Shutter
    //         </NavLink>
    //       </NavItem>

    //       {/* <NavItem className="n-item">
    //         <NavLink
    //           to="/quote-my-job"
    //           tag={Link}
    //           // exact
    //           active={menu === menuTypes.QUOTE}
    //           onClick={() => {
    //             handleMenuClick();
    //           }}
    //           className={
    //             menu === menuTypes.QUOTE ? "n-item-active" : "n-item-none"
    //           }
    //         >
    //           <FontAwesomeIcon icon={faShippingFast} /> Quote My Job
    //         </NavLink>
    //       </NavItem> */}

    //       <NavItem className="n-item">
    //         <NavLink
    //           to="/contact-us"
    //           tag={Link}
    //           // exact
    //           active={menu === menuTypes.CONTACTUS}
    //           onClick={() => {
    //             handleMenuClick();
    //           }}
    //           className={
    //             menu === menuTypes.CONTACTUS ? "n-item-active" : "n-item-none"
    //           }
    //         >
    //           <FontAwesomeIcon icon={faAddressBook} /> Contact us
    //         </NavLink>
    //       </NavItem>
    //     </Nav>

    //     {/* <Nav navbar className="ml-auto">
    //       <Badge theme="light" className="n-x">
    //         <div className="n-contact">
    //           <FontAwesomeIcon icon={faPhone} />
    //           <i> 0800 765 567 </i>
    //         </div>
    //       </Badge>
    //     </Nav> */}
    //   </Collapse>
    // </Navbar>
  );
};

// shorthand
const mapStateToProps = ({ menu }) => ({ menu });

export default connect(mapStateToProps, null)(SohoNavbar);
