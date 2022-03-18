import { Box } from "@mui/system";
import React, { useContext } from "react";
import { FavoriteContext } from "../../utils/favoriteprovider"
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteFavorite from "./deletefavorites";

const ItemFavorite = () => {

    const { favorite } = useContext(FavoriteContext)

    return (
        <div>
            <Box display="flex" >
                {favorite.map((item: any) => (
                    <Box ml="20px" width="30%" className="item_container"  >
                        <Box bgcolor="rgb(235, 237, 238)">
                            <Box textAlign="right">
                                <DeleteFavorite item={item}>< FavoriteIcon /></DeleteFavorite>
                            </Box>
                            <img width="100%" height="80%" src={item.img} />
                            <Box bgcolor="white" width="40%" borderRadius="10px" textAlign="center">
                                R$ {item.price}
                            </Box>
                        </Box>
                        <Box margin="10px">
                            {item.product}
                        </Box>
                    </Box>
                ))}
            </Box>
        </div>
    )
}


export default ItemFavorite;