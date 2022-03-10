import React from "react";
import { Box } from "@mui/system";


import "./homepag.css"
import HomeNavBar from "../../components/homecomps/homenavbar/homenavbar";
import HeaderNav from "../../components/homecomps/homenavbar/headernav";
import HeaderNavDown from "../../components/homecomps/homenavbar/headernavdown";

const HomePag = () => {
    return (
        <div className="container">
           <Box>
               <HeaderNav />
               <HomeNavBar />
               <HeaderNavDown />
           </Box>
        </div>
    )
}


export default HomePag;