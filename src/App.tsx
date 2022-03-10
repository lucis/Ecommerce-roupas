import React from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import HomePag from "../src/pages/home/homepag"

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePag />} />
        </Routes>
      </Router>
    </div>
  )
}


export default App;