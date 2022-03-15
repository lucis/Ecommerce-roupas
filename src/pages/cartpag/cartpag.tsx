import { Box } from "@mui/system";
import React from "react";
import ContainerCart from "../../components/cartcomps/containercart";
import HeaderNav from "../../components/homecomps/homenavbar/headernav";
import HomeNavBar from "../../components/homecomps/homenavbar/homenavbar";
import CartProvider from "../../utils/cartprovider";


const CartPag = () => {
    return (
        <div>
            <Box>
                <HeaderNav />
                <HomeNavBar />
                <hr style={{ border: "0", height: "0", borderTop: "1px solid rgba(0, 0, 0, 0.1)" }} />
                <Box >
                    <ContainerCart />
                </Box>
            </Box>
        </div>
    )
}


export default CartPag;
