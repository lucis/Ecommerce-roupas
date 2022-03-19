import React from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import HomePag from "../src/pages/home/homepag"
import CartPag from "./pages/cartpag/cartpag";
import FavoritesPag from "./pages/favoritespag/favaritespag";
import ItemsDetailsPag from "./pages/items_detailspag/itemsdetailspag";
import LoginPag from "./pages/loginpag/loginpag";
import RegisterPag from "./pages/registerpag/registerpag";
import CartProvider from "./utils/cartprovider";
import FavoriteProvider from "./utils/favoriteprovider";
import ItemsProvider from "./utils/itemsprovider";
import LoginProvider from "./utils/loginprovider";




const App = () => {
  return (
    <div>
      <ItemsProvider>
        <CartProvider>
          <FavoriteProvider>
            <LoginProvider>
              <Router>
                <Routes>
                  <Route path="/" element={<HomePag />} />
                  <Route path="/itemdetails" element={<ItemsDetailsPag />} />
                  <Route path="/cart" element={<CartPag />} />
                  <Route path="/favorites" element={<FavoritesPag />} />
                  <Route path="/login" element={<LoginPag />} />
                  <Route path="/register" element={<RegisterPag />} />
                </Routes>
              </Router>
            </LoginProvider>
          </FavoriteProvider>
        </CartProvider>
      </ItemsProvider>
    </div>
  )
}


export default App;