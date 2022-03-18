import { Box } from "@mui/system";
import React, { FC, useCallback, useContext,useEffect } from "react";
import { FavoriteContext } from "../../utils/favoriteprovider";
import "./favoritecomps.css"

interface Props {
    item: any
}

const DeleteFavorite: FC<Props> = ({ children, item }) => {

    const { favorite, setFavorite } = useContext(FavoriteContext)

    const onDeleteFavorite = useCallback((productItem: any) => {
        const newFavorite = favorite.filter((item: any) => productItem !== item.product)
        setFavorite(newFavorite)
        window.localStorage.setItem("favorite", JSON.stringify(newFavorite))
    }, [favorite])

    return (
        <div>
            <Box>
                <button onClick={() => onDeleteFavorite(item.product)} className="delete_favorite">{children}</button>
            </Box>
        </div>
    )
}


export default DeleteFavorite;