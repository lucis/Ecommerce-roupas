import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PregnantWomanIcon from '@material-ui/icons/PregnantWoman';
import SportsIcon from '@material-ui/icons/Sports';
import PersonIcon from '@material-ui/icons/Person';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { Box } from "@mui/system";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuBtn = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <MenuIcon />
            </Button>
            <Menu

                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}

            >
                <MenuItem onClick={handleClose}><Box marginRight="8px"><AccountCircleIcon /></Box>Profile</MenuItem>
                <hr />
                <Link to="/cart" className="menu_btn">
                    <MenuItem onClick={handleClose}><Box marginRight="8px"><ShoppingCartOutlinedIcon /></Box>Cart</MenuItem>
                </Link>
                <hr />
                <Link to="/" className="menu_btn">
                    <MenuItem onClick={handleClose}><Box marginRight="8px"><HomeOutlinedIcon /></Box>Home</MenuItem>
                </Link>
                <hr />
                <Link to="/favorites" className="menu_btn">
                    <MenuItem onClick={handleClose}><Box marginRight="8px"><FavoriteBorderOutlinedIcon /></Box>Favoritos</MenuItem>
                </Link>
                <hr />
                <MenuItem onClick={handleClose}><Box marginRight="8px"><PersonIcon /></Box>Homem</MenuItem>
                <hr />
                <MenuItem onClick={handleClose}><Box marginRight="8px"><PregnantWomanIcon /></Box>Mulher</MenuItem>
                <hr />
                <MenuItem onClick={handleClose}><Box marginRight="8px"><SentimentVerySatisfiedIcon /></Box>Kids</MenuItem>
                <hr />
                <MenuItem onClick={handleClose}><Box marginRight="8px"><SportsIcon /></Box>Esportes</MenuItem>
                <hr />
                <MenuItem onClick={handleClose}><Box marginRight="8px"><BookmarkBorderIcon /></Box>Marcas</MenuItem>
                <hr />
                <MenuItem onClick={handleClose}><Box marginRight="8px"><ImageSearchIcon /></Box>Coleções</MenuItem>
            </Menu>
        </div>
    );
}

export default MenuBtn;