import { CollectionsBookmarkOutlined, SwapVerticalCircleTwoTone } from "@material-ui/icons";
import { Box } from "@mui/system";
import React, { FC, useContext } from "react";
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
        const productInCart = cart.find((product: any) => product.product == product)
        let quantity = 0
        if (!productInCart) {
            setCart(
                [...cart,
                {
                    img,
                    product,
                    price,
                    quantity: 1
                }
                ]
            )
        } else {
            setCart(
                [...cart,
                {
                    img,
                    product,
                    price,
                    quantity: quantity + 1
                }
                ]
            )
        }
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