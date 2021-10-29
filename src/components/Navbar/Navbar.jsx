import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import * as ROUTES from "../../constants/routes.js";
import logo from "../../assets/images/logo.png";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  let currentPage = window.location.pathname;
  const history = useHistory();
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const burgerMenuHandle = () => {
    setShowBurgerMenu(!showBurgerMenu);
  };

  const closeBurgerMenu = () => {
    setShowBurgerMenu(false);
  };

  const gotoHomePage = () => {
    history.push(ROUTES.HOME);
  };

  return (
    <div className="outbound-m">
      <div className="outbound">
        <div
          className={showBurgerMenu ? "topnav responsive" : "topnav"}
          id="myTopnav"
        >
          <div className="dropdown">
            <div className="branch">
              {/* <Link to={ROUTES.HOME} style={{ padding: 0 }}>
                <img src={logo} alt="" className="n-logo"></img>
              </Link> */}
              {/* <a href={ROUTES.HOME} className="branch"> */}
              <img
                src={logo}
                alt=""
                className="n-logo"
                onClick={gotoHomePage}
              ></img>
              {/* </a> */}
              {/* <img src={logo} alt="" className="n-logo"></img> */}
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
                className={currentPage == ROUTES.BLINDS_ROLLER ? 'active' : ''}
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
                className={currentPage == ROUTES.BLINDS_VENETIAN ? 'active' : ''}
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
                className={currentPage == ROUTES.BLINDS_VERTICAL ? 'active' : ''}
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
                className={currentPage == ROUTES.BLINDS_ZEBRA ? 'active' : ''}
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
                className={currentPage == ROUTES.CURTAIN_DAY ? 'active' : ''}
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
                className={currentPage == ROUTES.CURTAIN_NIGHT ? 'active' : ''}
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
                className={currentPage == ROUTES.SHUTTER_TIMBER ? 'active' : ''}
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
                className={currentPage == ROUTES.SHUTTER_PVC ? 'active' : ''}
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

          {/* <div className="dropdown">
            <button className="dropbtn">
              Collections&nbsp;
              <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
            </button>
            <div className="dropdown-content">
              <a
                href={ROUTES.PROJECTS}
                rel="noopener noreferrer"
                onClick={closeBurgerMenu}
              >
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="pulled"
                ></FontAwesomeIcon>
                &nbsp; Projects
              </a>
              <a
                href={ROUTES.HOUZZ_REVIEWS}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeBurgerMenu}
              >
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="pulled"
                ></FontAwesomeIcon>
                &nbsp; Reviews
              </a>
            </div>
          </div> */}
          <a
            href={ROUTES.PROJECTS}
            rel="noopener noreferrer"
            className={currentPage == ROUTES.PROJECTS ? 'active' : ''}
            onClick={closeBurgerMenu}
          >
            Projects
          </a>

          {/* <a
            href={ROUTES.HOUZZ_PROJECTS}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeBurgerMenu}
          >
            Projects
          </a>
          <a
            href={ROUTES.HOUZZ_REVIEWS}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeBurgerMenu}
          >
            Reviews
          </a> */}

          <a
            href={ROUTES.SHOWROOM}
            rel="noopener noreferrer"
            className={currentPage == ROUTES.SHOWROOM ? 'active' : ''}
            onClick={closeBurgerMenu}
          >
            Show Room
          </a>

          <a
            href={ROUTES.CONTACTUS}
            rel="noopener noreferrer"
            className={currentPage == ROUTES.CONTACTUS ? 'active' : ''}
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
