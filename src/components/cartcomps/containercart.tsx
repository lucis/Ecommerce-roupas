import { Box } from "@mui/system";
import React, { useContext } from "react";
import { CartContext } from "../../utils/cartprovider";


const ContainerCart = () => {

    const { cart } = useContext(CartContext)
    {console.log(cart)}
    return (
        <div>
            <Box>
                {cart.map((item:any) => (<Box>
                    {item.price}
                </Box>))}
                sds
            </Box>
        </div>
    )
}


export default ContainerCart;