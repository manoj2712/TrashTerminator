import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/Home";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="center">
        <HomePage />
      </div>
    </>
  );
}

export default App;
