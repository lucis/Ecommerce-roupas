import React, { createContext, FC, useState } from "react";

interface Props {
    cart: any
    setCart(item: any): any
    totalValue: any
    setTotalValue(value: any): void


}


export const CartContext = createContext<Props>({ cart: [], setCart: () => { }, totalValue: 0, setTotalValue: () => { }, })


const CartProvider: FC = ({ children }) => {

    const [cart, setCart] = useState([])
    const [totalValue, setTotalValue] = useState()


    return (
        <div>
            <CartContext.Provider value={{ cart, setCart, totalValue, setTotalValue }}>
                {children}
            </CartContext.Provider>
        </div>
    )
}


export default CartProvider;