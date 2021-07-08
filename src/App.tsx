import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Card from "./component/Card";

import image from "./assets/image-header-mobile.jpg";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Card
        imageSrc={image}
        list={[
          ["10k+", "companies"],
          ["314", "templates"],
          ["12M+", "queries"],
        ]}
      >
        <h2>
          Get <span>insights</span> that help your business grow.
        </h2>
        <p>
          Discover the benefits of data analytics and make better decisions regarding revenue,
          customer experience, and overall efficiency.
        </p>
      </Card>
    </div>
  );
}

export default App;
