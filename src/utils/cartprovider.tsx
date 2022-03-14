import React, { createContext, FC, useState } from "react";

interface Props {
    cart: any
    setCart(item: any): any
}


export const CartContext = createContext<Props>({ cart: [], setCart: () => { }, })


const CartProvider: FC = ({ children }) => {

    const [cart, setCart] = useState([])

    return (
        <div>
            <CartContext.Provider value={{ cart, setCart }}>
                {children}
            </CartContext.Provider>
        </div>
    )
}


export default CartProvider;