import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./views/Main";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="main-content ">
        <Main></Main>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
