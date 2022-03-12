import axios from "axios";
import React, { createContext, FC, useEffect, useState } from "react";

interface Props {
    itemsproduct: any
    setItemsProduct(item: any): any
}

const baseURL = "http://localhost:5500/api"

export const ItemsContext = createContext<Props>({ itemsproduct: [], setItemsProduct: () => { }, })


const ItemsProvider: FC = ({ children }) => {

    const [itemsproduct, setItemsProduct] = useState<any []>([])

    useEffect(() => {
        axios.get(baseURL).
          then(res => setItemsProduct(res.data.itens)).
          catch(error => console.log(error))
      }, [])

    return (
        <div>
            <ItemsContext.Provider value={{ itemsproduct, setItemsProduct }}>
                {children}
            </ItemsContext.Provider>
        </div>
    )
}


export default ItemsProvider;