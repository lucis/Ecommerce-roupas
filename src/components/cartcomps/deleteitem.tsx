import { Box } from "@mui/system";
import React, { FC, useCallback, useContext } from "react";
import { CartContext } from "../../utils/cartprovider";
import "./itemcart.css"

interface Props {
    item: any
}

const DeleteItem: FC<Props> = ({ children, item }) => {

    const { cart, setCart } = useContext(CartContext)

    const OnDelete = useCallback((itemProduct: any) => {
        const NewCart = cart.filter((item: any) => itemProduct !== item.product)
        setCart(NewCart)
        window.localStorage.setItem("cart", JSON.stringify(NewCart))
    },[cart])

    return (
        <div>
            <Box >
                <button className="btn_delete" onClick={() => OnDelete(item.product)}>{children}</button>
            </Box>
        </div>
    )
}


export default DeleteItem;