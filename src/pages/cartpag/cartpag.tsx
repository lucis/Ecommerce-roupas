import { Box } from "@mui/system";
import React from "react";
import ContainerCart from "../../components/cartcomps/containercart";
import CartProvider from "../../utils/cartprovider";


const CartPag = () => {
    return (
        <div>
            <Box>
                <ContainerCart />
            </Box>
        </div>
    )
}


export default CartPag;
