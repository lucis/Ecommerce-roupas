import { Box } from '@mui/system';
import React, { FC } from 'react';
import BtnAddCart from './btnaddcart';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import "./itemdetails.css"

interface Props {
    imgurl: string
    producturl: string
    priceurl: string
    descriptionurl: string

}

const ItemsDetails: FC<Props> = ({ imgurl, producturl, descriptionurl, priceurl }) => {
    return (
        <div>
            <Box >
                <Box display="-webkit-flex">
                    <Box textAlign="center" flex="1" bgcolor="rgb(235, 237, 238)">
                        <img src={imgurl} />
                    </Box>
                    <Box width="32%"
                        display="block"
                        position="relative"
                        top="10px"
                        left="20px"
                        padding="10px">
                        <Box
                            fontSize="36px"
                            fontStyle="italic"
                            fontWeight="500"
                        >
                            {producturl.toUpperCase()}
                        </Box>
                        <Box fontSize="18px"
                            fontWeight="650"
                            fontFamily="monospace"
                            position="relative"
                            top="px">
                            {priceurl}
                        </Box>
                        <Box fontWeight="200"
                            position="relative"
                            top="30px">
                            <Box display="flex">Até 10x<Box fontWeight="bold" mr="5px" ml="5px">R$ 100</Box> sem juros</Box>
                        </Box>
                        <Box position="relative"
                            top="70px"
                            width="85%">
                            <Box fontSize="15px" fontWeight="bold">***UNISSEX, FORMATO GRANDE | NÃO APLICÁVEL A NENHUMA PROMOÇÃO***</Box>
                            <Box fontWeight="200" mt="5px">
                                {descriptionurl}
                            </Box>
                        </Box>
                        <Box >
                            <BtnAddCart><Box display="flex" >Adicionar ao carrinho<Box ml="15px"><ArrowForwardOutlinedIcon /></Box></Box></BtnAddCart>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}


export default ItemsDetails;