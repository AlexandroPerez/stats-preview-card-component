import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Card from "./component/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <Card
        imageSrc="/assets/image-header-mobile.jpg"
        title="Get **insights** that help your business grow."
        desc="Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency."
        list={[
          ["10k+", "companies"],
          ["314", "templates"],
          ["12M+", "queries"],
        ]}
      />
    </div>
  );
}

export default App;
