import { Box } from '@mui/material';
import React from 'react';
import "./itemcart.css"


const ContainerFloatCart = () => {
    return (
        <div className="media-containerFloat">
            <Box width="88%" bgcolor="#FFFFE0"
                padding="30px">
                <Box fontFamily="'Helvetica','Arial',sans-serif"
                    fontWeight="800"
                    fontSize="18px"
                    mb="8px">COMPRE AGORA!</Box>
                <Box paddingBottom="22px">Aproveite enquanto temos este tamanho disponível. Os produtos no carrinho, não são reservados e podem acabar em breve.</Box>
            </Box>
        </div>
    )
}


export default ContainerFloatCart;