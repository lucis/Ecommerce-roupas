import { Box } from '@mui/system';
import React, { FC, useContext } from 'react';
import BtnAddCart from './btnaddcart';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import "./itemdetails.css"
import { CartContext } from '../../utils/cartprovider';


interface Props {
    imgurl: string
    producturl: string
    priceurl: string
    descriptionurl: string
    quantityurl: string

}

const ItemsDetails: FC<Props> = ({ imgurl, producturl, descriptionurl, priceurl, quantityurl }) => {
    return (
        <div>
            <Box className="container_img_product_media">
                <Box display="flex">
                    <Box className="container_img_product" textAlign="center" flex="1" bgcolor="rgb(235, 237, 238)">
                        <img className="img_product" src={imgurl} />
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
                            R$ {priceurl}
                        </Box>
                        <Box fontWeight="200"
                            position="relative"
                            top="30px">
                            <Box display="flex">Até 10x<Box fontWeight="bold" mr="5px" ml="5px"> R$ {(parseFloat(priceurl) / 10).toFixed(2)}</Box> sem juros</Box>
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
                            <BtnAddCart quantity={quantityurl} img={imgurl} product={producturl} price={priceurl}><Box display="flex" >Adicionar ao carrinho<Box ml="15px"><ArrowForwardOutlinedIcon /></Box></Box></BtnAddCart>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}


export default ItemsDetails;