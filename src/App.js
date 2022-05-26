import React, { useState, useEffect } from "react";
import "./App.css";
import Review from "./Review";

function App() {
  return (
    <div className="App">
      <h1>Our Reviews</h1>
      <Review />
    </div>
  );
}

export default App;
