import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faAngleDoubleRight
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import * as ROUTES from "../../constants/routes";
import logo from "../../assets/images/SoHo-Logo-No-script3-300x166.png";

const Navbar = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const burgerMenuHandle = () => {
    setShowBurgerMenu(!showBurgerMenu);
  };

  const closeBurgerMenu = () => {
    setShowBurgerMenu(false);
  };

  return (
    <div className="outbound-m">
      <div className="outbound">
        <div
          className={showBurgerMenu ? "topnav responsive" : "topnav"}
          id="myTopnav"
        >
          <div className="dropdown">
            {/* <span className="branch">SOHO BLINDS</span> */}
            <div className="branch">
              <img src={logo} alt="" className="n-logo"></img>
            </div>
          </div>

          <a
            href={ROUTES.HOME}
            rel="noopener noreferrer"
            onClick={closeBurgerMenu}
          >
            Home
          </a>

          <div className="dropdown">
            <button className="dropbtn">
              Blinds&nbsp;
              <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
            </button>
            <div className="dropdown-content">
              <a
                href={ROUTES.BLINDS_ROLLER}
                rel="noopener noreferrer"
                onClick={closeBurgerMenu}
              >
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="pulled"
                ></FontAwesomeIcon>
                &nbsp; Roller Blinds
              </a>
              <a
                href={ROUTES.BLINDS_VENETIAN}
                rel="noopener noreferrer"
                onClick={closeBurgerMenu}
              >
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="pulled"
                ></FontAwesomeIcon>
                &nbsp; Venetian Blinds
              </a>
              <a
                href={ROUTES.BLINDS_VERTICAL}
                rel="noopener noreferrer"
                onClick={closeBurgerMenu}
              >
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="pulled"
                ></FontAwesomeIcon>
                &nbsp; Vertical Blinds
              </a>
              <a
                href={ROUTES.BLINDS_ZEBRA}
                rel="noopener noreferrer"
                onClick={closeBurgerMenu}
              >
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="pulled"
                ></FontAwesomeIcon>
                &nbsp; Zebra Blinds
              </a>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">
              Curtains&nbsp;
              <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
            </button>
            <div className="dropdown-content">
              <a
                href={ROUTES.CURTAIN_DAY}
                rel="noopener noreferrer"
                onClick={closeBurgerMenu}
              >
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="pulled"
                ></FontAwesomeIcon>
                &nbsp; Day Curtains
              </a>
              <a
                href={ROUTES.CURTAIN_NIGHT}
                rel="noopener noreferrer"
                onClick={closeBurgerMenu}
              >
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="pulled"
                ></FontAwesomeIcon>
                &nbsp; Night Curtains
              </a>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">
              Shutters&nbsp;
              <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
            </button>
            <div className="dropdown-content">
              <a
                href={ROUTES.SHUTTER_TIMBER}
                rel="noopener noreferrer"
                onClick={closeBurgerMenu}
              >
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="pulled"
                ></FontAwesomeIcon>
                &nbsp; Timber Shutters
              </a>
              <a
                href={ROUTES.SHUTTER_PVC}
                rel="noopener noreferrer"
                onClick={closeBurgerMenu}
              >
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="pulled"
                ></FontAwesomeIcon>
                &nbsp; PVC Shutters
              </a>
              {/* <a
                href={ROUTES.SHUTTER_EXTERIOR}
                rel="noopener noreferrer"
                onClick={closeBurgerMenu}
              >
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="pulled"
                ></FontAwesomeIcon>
                &nbsp; Exterior Shutters
              </a> */}
            </div>
          </div>

          {/* <a
            href={ROUTES.BUYINGGUIDE}
            rel="noopener noreferrer"
            onClick={closeBurgerMenu}
          >
            Buying guide
          </a> */}

          <a
            href={ROUTES.CONTACTUS}
            rel="noopener noreferrer"
            onClick={closeBurgerMenu}
          >
            Contact us
          </a>

          <a
            href="#0"
            rel="noopener noreferrer"
            className="icon"
            onClick={burgerMenuHandle}
          >
            &#9776;
          </a>
          {/* <a
          // href="javascript:void(0);"
          // style="font-size:15px;"
          class="icon"
          onclick={smallHandler}
        >
          &#9776;
        </a> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
