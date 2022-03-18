import { Box } from "@mui/system";
import React, { useContext, useEffect } from "react";
import { ItemsContext } from "../../../utils/itemsprovider"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./items.css"
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import BtnAddToFavoriteItem from "../../favoritescomps/btnaddtofavoriteitem"
import "../../favoritescomps/favoritecomps.css"
import { FavoriteContext } from "../../../utils/favoriteprovider";
import DeleteFavorite from "../../favoritescomps/deletefavorites";
import FavoriteIcon from "@material-ui/icons/Favorite"

const ItemsProduct = () => {

    const { itemsproduct } = useContext(ItemsContext)

    return (
        <div >

            < Box
                display="flex"
                justifyContent="center"
                padding="22px"
                width="100%"
                height="100%"
            >
                {itemsproduct.map((item: any) => (

                    <Box className="container_item" width="25%" display="block" mr="15px">
                        <Box bgcolor="rgb(235, 237, 238)" textAlign="right" padding="5px">
                            <BtnAddToFavoriteItem product={item.product} img={item.img} price={item.price} ><FavoriteBorderOutlinedIcon /></BtnAddToFavoriteItem>
                        </Box>
                        <Link className="link_style" to={`/itemdetails?product=${item.product}&img=${item.img}&price=${item.price}&description=${item.description}&quantity=${item.quantity}`} >
                            <Box bgcolor="rgb(235, 237, 238)">
                                <img width="100%" height="100%" src={item.img} />
                                <Box
                                    fontSize="10px"
                                    fontFamily="monospace"
                                    bgcolor="white"
                                    width="30%"
                                    borderRadius="7px"
                                    ml="10px"
                                >
                                    <h2>R$ {item.price}</h2>
                                </Box>
                            </Box>
                            <Box m="5px" width="100%">
                                <Box fontSize="12px"
                                    fontFamily="monospace"
                                    padding="5px"

                                >

                                    <h2>{item.product}</h2>
                                </Box>
                                <Box className="font_item"
                                    fontSize="9px"
                                    fontFamily="monospace"
                                    padding="5px" >
                                    <h2>{item.category}</h2>
                                </Box>
                                <Box>
                                    {item.transport ? <Box className="font_item"
                                        fontSize="9px"
                                        fontFamily="monospace"
                                        padding="5px" >
                                        <h2>frete grátis</h2>
                                    </Box> : <Box display="none" />}
                                </Box>
                            </Box>
                        </Link>
                    </Box>

                ))}
            </Box>


        </div >
    )
}


export default ItemsProduct;