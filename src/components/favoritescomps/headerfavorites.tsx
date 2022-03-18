import { Box } from "@mui/system";
import React, { useContext } from "react";
import { FavoriteContext } from "../../utils/favoriteprovider";


const HeaderFavorites = () => {

    const { favorite } = useContext(FavoriteContext)
    const itemCountFavorite = Object.keys(favorite).length


    return (
        <div>
            <Box>
                <Box fontWeight="700" fontSize="30px">
                    MINHA LISTA DE DESEJOS
                </Box>
                <Box fontWeight="300" fontSize="18px" mt="10px">
                    {itemCountFavorite < 2 ? < Box > {itemCountFavorite} ITEM</Box> :
                        <Box> {itemCountFavorite} ITENS   </Box>}
                </Box>
                <Box mt="20px">
                    {itemCountFavorite > 0 ? "" :
                        <Box>Você ainda não salvou nenhum item na sua lista de desejos. Comece a comprar e adicione os seus produtos favoritos à sua lista de desejos.</Box>}
                </Box>
            </Box>
        </div >
    )
}


export default HeaderFavorites;