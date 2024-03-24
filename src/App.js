import React from "react";
import logo from "./image/yoshi.png";
import "./App.css";
import "./Title.css";
import POPOSList from "./POPOSList";

import Title from "./Title";

function App() {
  return (
    <div className="App">
      <Title />
      <POPOSList />
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          width={300}
          height={60}
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default App;

// Cant access repo talk to Andrew about it and also talk about gif search assigmnet
