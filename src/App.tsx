import React from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import HomePag from "../src/pages/home/homepag"
import CartPag from "./pages/cartpag/cartpag";
import ItemsDetailsPag from "./pages/items_detailspag/itemsdetailspag";
import CartProvider from "./utils/cartprovider";
import ItemsProvider from "./utils/itemsprovider";



const App = () => {
  return (
    <div>
      <ItemsProvider>
        <CartProvider>
          <Router>
            <Routes>
              <Route path="/" element={<HomePag />} />
              <Route path="/itemdetails" element={<ItemsDetailsPag />} />
              <Route path="/cart" element={<CartPag />} />
            </Routes>
          </Router>
        </CartProvider>
      </ItemsProvider>
    </div>
  )
}


export default App;