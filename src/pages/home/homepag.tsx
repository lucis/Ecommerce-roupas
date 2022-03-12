import React from "react";
import { Box } from "@mui/system";


import "./homepag.css"
import HomeNavBar from "../../components/homecomps/homenavbar/homenavbar";
import HeaderNav from "../../components/homecomps/homenavbar/headernav";
import HeaderNavDown from "../../components/homecomps/homenavbar/headernavdown";
import ContainerFloat from "../../components/homecomps/containerfloat/containerfloat";
import ContainerTeam from "../../components/homecomps/containerteam/containerteam";
import ItemsProduct from "../../components/homecomps/items/itemsproduct";
import HeaderItem from "../../components/homecomps/items/headeritems";


const HomePag = () => {
    return (
        <div >
            <Box className="container">
                <Box>
                    <HeaderNav />
                    <HomeNavBar />
                    <HeaderNavDown />
                </Box>
                <Box m="100px">
                    <ContainerFloat />
                </Box>
            </Box>
            <hr />
            <Box>
                <ContainerTeam />
            </Box>
            <Box mt="10px">
                <HeaderItem />
                <ItemsProduct />
            </Box>
            sdfsdfusfhdskfdsj
        </div>
    )
}


export default HomePag;