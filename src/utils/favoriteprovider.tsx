import React, { createContext, FC, useState } from "react"

interface Props {
    favorite: any
    setFavorite(favorite: any): void
}

export const FavoriteContext = createContext<Props>({ favorite: [], setFavorite: () => { } })


const FavoriteProvider: FC = ({ children }) => {

    const [favorite, setFavorite] = useState([])

    return (
        <FavoriteContext.Provider value={{
            favorite,
            setFavorite,
        }}>
            {children}
        </FavoriteContext.Provider>
    )
}


export default FavoriteProvider;