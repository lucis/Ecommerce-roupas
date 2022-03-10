import axios from "axios";
import React, { createContext, FC, useEffect } from "react";

interface Props {

}

const baseURL = "http://localhost:5500/api"

export const ItemsContext = createContext<Props>({})


const ItemsProvider: FC = ({ children }) => {

    useEffect(() => {
        axios.get(baseURL).
            then(res => console.log(res.data)).
            catch(error => console.log(error))
    }, [])

    return (
        <div>
            <ItemsContext.Provider value={{}}>
                {children}
            </ItemsContext.Provider>
        </div>
    )
}


export default ItemsProvider;