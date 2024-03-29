import React from "react";
import "./App.css";
import "./Title.css";
import POPOSList from "./POPOSList";
// import { Outlet } from "react-router-dom";
import Title from "./Title";
import Footer from "./Footer";
// import POPOSDetails from './POPOSDetails'

function App() {
  return (
    <div className="App">
      <Title />
      <POPOSList />
      <Footer />
      {/* <POPOSDetails/> */}
    </div>
  );
}

export default App;

// Cant access repo talk to Andrew about it and also talk about gif search assigmnet
