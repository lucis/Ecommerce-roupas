import React from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import HomePag from "../src/pages/home/homepag"
import ItemsProvider from "./utils/itemsprovider";



const App = () => {

  return (
    <div>
      <ItemsProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePag />} />
          </Routes>
        </Router>
      </ItemsProvider>
    </div>
  )
}


export default App;