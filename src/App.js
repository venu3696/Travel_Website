import React from "react";
import "./Styles.css";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Service from "./Routes/Service";
import Contact from "./Routes/Contact";

// Scroll to the top function

import { Route, Routes, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Wrapper>
    </div>
  );
}

export default App;
