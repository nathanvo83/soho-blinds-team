import React, { useState } from "react";
import "./SohoNavBar.css";
import { Link } from "react-router-dom";
import {
  faSearch,
  faPhone,
  faHome,
  faAddressBook,
  faShippingFast,
  faBarcode,
  faReceipt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Badge,
  Container,
  Button,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Collapse
} from "shards-react";
import logo from "./images/SoHo-Logo-No-script3-300x166.png";

const NavExample = props => {
  const { location } = props;
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropDownOpen = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCollapseOpen = () => {
    setCollapseOpen(!collapseOpen);
  };

  return (
    <Navbar
      // className="n-navbar"
      type="dark"
      theme="success"
      expand="md"
      sticky="top"
    >
      <Container>
        <NavbarBrand>
          <img src={logo} alt="logo" className="n-logo1"></img>
          {/* <Badge outline theme="alarm"> */}
          {/* <div className="n-branch-outter">
            <div className="n-branch">
              <FontAwesomeIcon className="n-icon" icon={faBarcode} />
              <i> SohoBlinds</i>
            </div>
          </div> */}

          {/* <div className="n-logo"></div> */}
          {/* </Badge> */}
        </NavbarBrand>
        <NavbarToggler onClick={handleCollapseOpen} />

        <Collapse open={collapseOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink to="/" tag={Link} exact active={location === "home"}>
                <FontAwesomeIcon icon={faHome} /> Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/product"
                tag={Link}
                exact
                active={location === "product"}
              >
                <FontAwesomeIcon icon={faReceipt} /> Product
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/quote-my-job"
                tag={Link}
                exact
                active={location === "quote-my-job"}
              >
                <FontAwesomeIcon icon={faShippingFast} /> Quote My Job
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                to="/contact-us"
                tag={Link}
                exact
                active={location === "contact-us"}
              >
                <FontAwesomeIcon icon={faAddressBook} /> Contact us
              </NavLink>
            </NavItem>
          </Nav>

          <Nav navbar className="ml-auto">
            <Badge theme="dark">
              <div className="n-contact">
                <FontAwesomeIcon icon={faPhone} />
                <i> 0226713464 </i>
              </div>
            </Badge>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default NavExample;

// export default class NavExample extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggleDropdown = this.toggleDropdown.bind(this);
//     this.toggleNavbar = this.toggleNavbar.bind(this);

//     this.state = {
//       dropdownOpen: false,
//       collapseOpen: false
//     };
//   }

//   toggleDropdown() {
//     this.setState({
//       ...this.state,
//       ...{
//         dropdownOpen: !this.state.dropdownOpen
//       }
//     });
//   }

//   toggleNavbar() {
//     this.setState({
//       ...this.state,
//       ...{
//         collapseOpen: !this.state.collapseOpen
//       }
//     });
//   }

//   render() {
//     return (
//       <Navbar type="dark" theme="info" expand="md" sticky="top">
//         <NavbarBrand href="#">Shards React</NavbarBrand>
//         <NavbarToggler onClick={this.toggleNavbar} />

//         <Collapse open={this.state.collapseOpen} navbar>
//           <Nav navbar>
//             <NavItem>
//               <NavLink active href="#">
//                 Active
//               </NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink to="/" tag={Link}>
//                 Home
//               </NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink to="/product" tag={Link}>
//                 Product
//               </NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="#">Contact us</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="#" disabled>
//                 Disabled
//               </NavLink>
//             </NavItem>{" "}
//             <Dropdown
//               open={this.state.dropdownOpen}
//               toggle={this.toggleDropdown}
//             >
//               <DropdownToggle nav caret>
//                 Dropdown
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem>Action</DropdownItem>
//                 <DropdownItem>Another action</DropdownItem>
//                 <DropdownItem>Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//           </Nav>

//           <Nav navbar className="ml-auto">
//             <InputGroup size="sm" seamless>
//               <InputGroupAddon type="prepend">
//                 <InputGroupText>
//                   <FontAwesomeIcon icon={faSearch} />
//                 </InputGroupText>
//               </InputGroupAddon>
//               <FormInput className="border-0" placeholder="Search..." />
//             </InputGroup>
//           </Nav>
//         </Collapse>
//       </Navbar>
//     );
//   }
// }
