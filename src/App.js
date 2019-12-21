import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <div class="hovereffect">
          <img
            class="img-responsive"
            src="http://placehold.it/500x300"
            alt=""
          />
          <div class="overlay">
            <h2>Effect 11</h2>
            <p>
              <a href="#">LINK HERE</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
