import React, { useContext, useEffect } from "react";
import { Box } from "@mui/system"

import MenuBtn from "../homenavbar/menubtn"
import LogoNavBar from "./logonavbar";
import SearchNavHome from "./searchnavhome";
import NavHomeBtns from "./navhomebtns";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

import "./navhome.css"
import NavHomeBtns2 from "./navhomebtns2";
import IconBtnNavHome from "./iconbtnnavhome";
import { Link } from "react-router-dom";
import { CartContext } from "../../../utils/cartprovider";


const HomeNavBar = () => {

    const { cart, setCart } = useContext(CartContext)
    const itemCount = Object.keys(cart).length

    return (
        <div>
            <Box
                display="flex"
                bgcolor="white"
                p="10px"
                justifyContent="flex-end"
            >
                <Box
                    flex="1"
                    margin="20px">
                    <MenuBtn />
                </Box>
                <Box
                    display="flex"
                    flex="1"
                    m="20px"

                >
                    <Box className="btns"
                        color="default">
                        <NavHomeBtns>HOMEM</NavHomeBtns>
                    </Box>
                    <Box className="btns">
                        <NavHomeBtns>MULHER</NavHomeBtns>
                    </Box>
                    <Box className="btns">
                        <NavHomeBtns>KIDS</NavHomeBtns>
                    </Box>
                    <Box className="btns">
                        <NavHomeBtns2>ESPORTES</NavHomeBtns2>
                    </Box>
                    <Box className="btns">
                        <NavHomeBtns2>MARCAS</NavHomeBtns2>
                    </Box>
                    <Box className="btns">
                        <NavHomeBtns2>COLEÇÕES</NavHomeBtns2>
                    </Box>
                </Box>
                <Box m="20px" >
                    <SearchNavHome />
                </Box>
                <Box display='flex'>
                    <Box >
                        <IconBtnNavHome><PermIdentityIcon /></IconBtnNavHome>
                    </Box>
                    <Box >
                        <IconBtnNavHome><FavoriteBorderOutlinedIcon /></IconBtnNavHome>
                    </Box>
                    <Box>
                        <Box display="flex">
                            <Link to="/cart">
                                <Box >
                                    <IconBtnNavHome>
                                        <ShoppingCartOutlinedIcon />
                                    </IconBtnNavHome>
                                </Box>
                            </Link>
                            {itemCount > 0 && <Box
                                className="btns"
                                bgcolor="#007bc6"
                                borderRadius="30px"
                                height="23px"
                                width="23px"
                                color="white"
                                textAlign="center"
                                position="relative"
                                right="30px"
                                top="10px"


                            >
                                <span  >{itemCount}</span></Box>}
                        </Box>
                    </Box>
                </Box>
                <Box mr="35px" ml="30px">
                    <LogoNavBar />
                </Box>
            </Box>
        </div>
    )
}


export default HomeNavBar;