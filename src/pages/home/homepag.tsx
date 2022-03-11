import React from "react";
import { Box } from "@mui/system";


import "./homepag.css"
import HomeNavBar from "../../components/homecomps/homenavbar/homenavbar";
import HeaderNav from "../../components/homecomps/homenavbar/headernav";
import HeaderNavDown from "../../components/homecomps/homenavbar/headernavdown";
import ContainerFloat from "../../components/homecomps/containerfloat/containerfloat";

const HomePag = () => {
    return (
        <div className="container">
            <Box>
                <Box>
                    <HeaderNav />
                    <HomeNavBar />
                    <HeaderNavDown />
                </Box>
                <Box m="100px">
                    <ContainerFloat />
                </Box>
            </Box>
        </div>
    )
}


export default HomePag;