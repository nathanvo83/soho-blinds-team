import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./views/Main";
import Footer from "./components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

const App = () => {
  return (
    <div>
      <div class="app-icon-bar">
        {/* <div className="app-phone-content">
          <a href="tel:+64 800 765 567" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faPhoneAlt}
              className="app-phone"
            ></FontAwesomeIcon>
          </a>
        </div> */}

        <div className="app-phone-outter">
          {/* <a href="tel:+64 800 765 567" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faPhoneAlt}
              className="app-phone"
            ></FontAwesomeIcon>
          </a> */}
          <a href="tel:+64 800 765 567" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faPhoneAlt}
              className="app-phone"
            ></FontAwesomeIcon>
          </a>
        </div>
        {/* <a
          href="tel:+64 800 765 567"
          className="app-phone"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faPhoneVolume}></FontAwesomeIcon>
        </a> */}
        {/* <a href="#" class="facebook">
          <i class="fa fa-facebook"></i>
        </a>
        <a href="#" class="twitter">
          <i class="fa fa-twitter"></i>
        </a>
        <a href="#" class="google">
          <i class="fa fa-google"></i>
        </a>
        <a href="#" class="linkedin">
          <i class="fa fa-linkedin"></i>
        </a>
        <a href="#" class="youtube">
          <i class="fa fa-youtube"></i>
        </a> */}
      </div>

      <Navbar></Navbar>
      <div className="main-content">
        <Main></Main>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
