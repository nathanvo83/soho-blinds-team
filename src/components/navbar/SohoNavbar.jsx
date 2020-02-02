import React, { useState } from "react";
import "./SohoNavBar.css";
import { Link } from "react-router-dom";
import {
  faPhone,
  faHome,
  faAddressBook,
  faShippingFast,
  faReceipt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Badge,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse
} from "shards-react";
import logo from "./images/SoHo-Logo-No-script3-300x166.png";

import { connect } from "react-redux";
import { menuTypes } from "../../constants/menuTypes";

const SohoNavbar = props => {
  const { menu } = props;
  const [collapseOpen, setCollapseOpen] = useState(false);
  // const [dropdownOpen, setDropdownOpen] = useState(false);

  // const handleDropDownOpen = () => {
  //   setDropdownOpen(!dropdownOpen);
  // };

  const handleCollapseOpen = () => {
    setCollapseOpen(!collapseOpen);
  };

  const handleMenuClick = () => {
    setCollapseOpen(false);
  };

  return (
    <Navbar
      className="n-navbar"
      type="light"
      // type="dark"
      // theme="success"
      expand="md"
      sticky="top"
    >
      <NavbarBrand>
        <img src={logo} alt="logo" className="n-logo1"></img>
      </NavbarBrand>
      <NavbarToggler onClick={handleCollapseOpen} />
      <Collapse open={collapseOpen} navbar>
        <Nav navbar>
          <NavItem className="n-item">
            <NavLink
              to="/"
              tag={Link}
              exact
              active={menu === menuTypes.HOME}
              onClick={() => {
                handleMenuClick();
              }}
              className={
                menu === menuTypes.HOME ? "n-item-active" : "n-item-none"
              }
            >
              <FontAwesomeIcon icon={faHome} /> Home
            </NavLink>
          </NavItem>
          <NavItem className="n-item">
            <NavLink
              to="/product"
              tag={Link}
              // exact
              active={menu === menuTypes.PRODUCT}
              onClick={() => {
                handleMenuClick();
              }}
              className={
                menu === menuTypes.PRODUCT ? "n-item-active" : "n-item-none"
              }
            >
              <FontAwesomeIcon icon={faReceipt} /> Product
            </NavLink>
          </NavItem>
          <NavItem className="n-item">
            <NavLink
              to="/quote-my-job"
              tag={Link}
              // exact
              active={menu === menuTypes.QUOTE}
              onClick={() => {
                handleMenuClick();
              }}
              className={
                menu === menuTypes.QUOTE ? "n-item-active" : "n-item-none"
              }
            >
              <FontAwesomeIcon icon={faShippingFast} /> Quote My Job
            </NavLink>
          </NavItem>

          <NavItem className="n-item">
            <NavLink
              to="/contact-us"
              tag={Link}
              // exact
              active={menu === menuTypes.CONTACTUS}
              onClick={() => {
                handleMenuClick();
              }}
              className={
                menu === menuTypes.CONTACTUS ? "n-item-active" : "n-item-none"
              }
            >
              <FontAwesomeIcon icon={faAddressBook} /> Contact us
            </NavLink>
          </NavItem>
        </Nav>

        <Nav navbar className="ml-auto">
          <Badge theme="light" className="n-x">
            <div className="n-contact">
              <FontAwesomeIcon icon={faPhone} />
              <i> 0800 765 567 </i>
            </div>
          </Badge>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

// shorthand
const mapStateToProps = ({ menu }) => ({ menu });

export default connect(mapStateToProps, null)(SohoNavbar);
