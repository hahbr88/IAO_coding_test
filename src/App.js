import React, { useState } from "react";
import "./App.css";
import Calendar from "./Calendar";
import Delivery from "./Delivery";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Calendar />
        <Delivery />
      </div>
    </div>
  );
};

export default App;
