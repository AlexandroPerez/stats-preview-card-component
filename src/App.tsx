import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Card from "./component/Card";

function App() {
  return (
    <div className="App">
      <Card
        imageSrc={{
          mobile: "/assets/image-header-mobile.jpg",
          desktop: "/assets/image-header-desktop.jpg",
        }}
        title="Get **insights** that help your business grow."
        desc="Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency."
        list={[
          ["10k+", "companies"],
          ["314", "templates"],
          ["12M+", "queries"],
        ]}
      />
      <div className="code">
        <p>
          Reusable component made with<br />
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            <span className="logo-container">
              <img src={logo} className="App-logo" alt="logo" /></span>&nbsp;React
          </a>
        </p>

        <p>
          <a href="/assets/component.png">
            <img src="/assets/component.png" alt="" />
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
