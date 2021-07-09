import logo from "./logo.svg";
import component from "./component.png";
import "./App.css";

import Card from "./component/Card";

function App() {
  return (
    <div className="App">
      <Card
        imageSrc={{
          /** When building react apps that will use public static assets, it is recommended to use
           * process.env.PUBLIC_URL, so that depending on the deployment URL, the links get processed
           * to use possible sub folders (like in a github hosted project, that may rely on them)
           *  */
          mobile: `${process.env.PUBLIC_URL}/assets/image-header-mobile.jpg`,
          desktop: `${process.env.PUBLIC_URL}/assets/image-header-desktop.jpg`,
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
          Reusable component made with
          <br />
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            <span className="logo-container">
              <img src={logo} className="App-logo" alt="logo" />
            </span>
            React
          </a>
        </p>

        <p>
          <a href={component}>
            <img src={component} alt="" />
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
