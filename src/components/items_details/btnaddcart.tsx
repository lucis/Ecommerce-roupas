import { Box } from "@mui/system";
import React, { FC, useContext } from "react";
import { CartContext } from "../../utils/cartprovider";
import "./itemdetails.css"

interface Props {
    img: string
    product: string
    price: string
}

const BtnAddCart: FC<Props> = ({ children, img, product, price }) => {
    const { cart, setCart } = useContext(CartContext)

    const AddToCart = () => {
        setCart(
            {
                img,
                product,
                price,
            }

        )
        console.log(cart)
    }
    return (
        <div>
            <Box position="relative"
                top="120px">
                <button onClick={AddToCart} className="btn_addcart">{children}</button>
            </Box>
        </div>
    )
}


export default BtnAddCart;