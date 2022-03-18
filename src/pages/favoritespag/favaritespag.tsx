import { Box } from "@mui/system";
import React from "react";
import ContainerFavorites from "../../components/favoritescomps/containerfavorites";
import HeaderNav from "../../components/homecomps/homenavbar/headernav";
import HomeNavBar from "../../components/homecomps/homenavbar/homenavbar";



const FavoritesPag = () => {
    return (
        <div>
            <Box>
                <HeaderNav />
                <HomeNavBar />
                <hr style={{ border: "0", height: "0", borderTop: "1px solid rgba(0, 0, 0, 0.1)" }} />
                <ContainerFavorites />
            </Box>
        </div>
    )
}


export default FavoritesPag;