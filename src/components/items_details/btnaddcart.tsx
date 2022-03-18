import { Box } from "@mui/system";
import React, { FC, useContext} from "react";
import { CartContext } from "../../utils/cartprovider";
import "./itemdetails.css"

interface Props {
    img: string
    product: string
    price: string
    quantity: string

}

const BtnAddCart: FC<Props> = ({ children, img, product, price, quantity }) => {
    const { cart, setCart } = useContext(CartContext)

    const AddToCart = (product: any) => {
        const newCart = [
            ...cart,
            {
                product,
                img,
                price,
            }
        ]
        setCart(newCart)
        window.localStorage.setItem("cart", JSON.stringify(newCart))
    }


    return (
        <div>
            <Box position="relative"
                top="120px">
                <button onClick={() => AddToCart(product)} className="btn_addcart">{children}</button>
            </Box>
        </div>
    )
}


export default BtnAddCart;