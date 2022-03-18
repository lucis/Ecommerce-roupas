import React, { createContext, FC, useEffect, useState } from "react"

interface Props {
    favorite: any
    setFavorite(favorite: any): void
}

export const FavoriteContext = createContext<Props>({ favorite: [], setFavorite: () => { } })


const FavoriteProvider: FC = ({ children }) => {

    const [favorite, setFavorite] = useState([])

    useEffect(() => {
        const newFavorite = window.localStorage.getItem("favorite")
        if (newFavorite) {
            setFavorite(JSON.parse(newFavorite))
        }
    }, [setFavorite])

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