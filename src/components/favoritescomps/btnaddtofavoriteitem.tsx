import { Box } from "@mui/system";
import React, { FC, useContext } from "react";
import "./favoritecomps.css"
import { FavoriteContext } from "../../utils/favoriteprovider"

interface Props {
    product: string
    price: string
    img: string
}

const BtnAddToFavoriteItem: FC<Props> = ({ children, product, img, price }) => {

    const { favorite, setFavorite } = useContext(FavoriteContext)

    const toAddFavorite = (product: string, img: string, price: string) => {

        const newFavorite = [...favorite,
        {
            product,
            img,
            price,
        }
        ]
        setFavorite(newFavorite)
        window.localStorage.setItem("favorite" , JSON.stringify(newFavorite))
    }
    return (
        <div>
            <Box >
                <button onClick={() => toAddFavorite(product, img, price)} className="btn-addtoFavorite">{children}</button>
            </Box>
        </div>
    )
}



export default BtnAddToFavoriteItem;