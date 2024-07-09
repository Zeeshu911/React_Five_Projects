import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HOME from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import { useState } from "react";

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<HOME show={show} setShow={setShow}/>}/>
          <Route path={"/about"} element={<About show={show} setShow={setShow}/>}/>
          <Route path={"/resume"} element={<Resume show={show} setShow={setShow}/>}/>
          <Route path={"/portfolio"} element={<Portfolio show={show} setShow={setShow}/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
