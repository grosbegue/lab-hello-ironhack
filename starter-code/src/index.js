import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div className="container">
    {" "}
    <div className="header">
      <div className="navbar">
        <img src="../images/ironhack-logo.svg" />
        <img src="../images/menu-top.svg" />
      </div>
      <div className="menutop">
        <div className="hellotext">
          <h1>
            Say Hello to <br /> React.js
          </h1>{" "}
          <h4>
            Discover plenty of stuff. And i mean lots of lots of lots. Become a
            ninja-cowboy developper.
          </h4>
          <div className="button">Awesome !</div>
        </div>
        <div className="logos">
          {" "}
          <img src="../images/react-logo.svg" />
          <img src="../images/react-logo.svg" width="200px" />
        </div>
      </div>
    </div>
    <div className="pictos">
      {" "}
      <div className="pictoCard">
        <img src="../images/icon1.png" />
        <h4>Declarative</h4>
        <h5>React is really nice and all.</h5>
      </div>
      <div className="pictoCard">
        <img src="../images/icon2.png" />
        <h4>Components</h4>

        <h5>React is really cool and all.</h5>
      </div>{" "}
      <div className="pictoCard">
        <img src="../images/icon3.png" />
        <h4>Single Way</h4>

        <h5>React is really sweet and all.</h5>
      </div>{" "}
      <div className="pictoCard">
        <img src="../images/icon4.png" />
        <h4>JSX</h4>

        <h5>React is really fun and all.</h5>
      </div>
    </div>
  </div>,
  document.getElementById("landing")
);
