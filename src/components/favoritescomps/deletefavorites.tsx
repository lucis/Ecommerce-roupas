import { Box } from "@mui/system";
import React, { FC, useContext } from "react";
import { FavoriteContext } from "../../utils/favoriteprovider";
import "./favoritecomps.css"

interface Props {
    item: any
}

const DeleteFavorite: FC<Props> = ({ children, item }) => {

    const { favorite, setFavorite } = useContext(FavoriteContext)

    const onDeleteFavorite = (productItem: any) => {
        const newFavorite = favorite.filter((item: any) => productItem != item.product)
        setFavorite(newFavorite)
        console.log(favorite)
    }

    return (
        <div>
            <Box>
                <button onClick={() => onDeleteFavorite(item.product)} className="delete_favorite">{children}</button>
            </Box>
        </div>
    )
}


export default DeleteFavorite;