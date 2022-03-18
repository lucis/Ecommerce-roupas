import React, { FC } from 'react';
import { Box } from "@mui/system";
import DeleteItem from './deleteitem';
import ClearIcon from '@material-ui/icons/Clear';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import QuantityItem from './quantityitem';
import "./itemcart.css"

interface Props {
    item: any
}

const ItemCart: FC<Props> = ({ item }) => {
    return (
        <div className="media_containerImg">
            <Box  border="1px solid black" width="88%" mt="40px"  >
                <Box display="flex">
                    <Box width="250px" bgcolor="rgb(235, 237, 238)">
                        <img className="media_imgItem" height="250px" width="250px" src={item.img} />
                    </Box>
                    <Box display="block"
                        margin="20px"
                        ml="25px">
                        <Box
                            width="250px"
                            fontSize="20px"
                            fontWeight="400"
                        >
                            <Box className="media_productName">
                                {item.product.toUpperCase()}
                            </Box>
                        </Box>
                        <Box fontWeight="400"
                            fontSize="14px"
                            mt="15px">
                            <Box className="media_sizeProduct">
                                TAMANHO: 42
                            </Box>
                        </Box>
                        <Box mt="50px" className="media_quantityContainer">
                            <QuantityItem />
                        </Box>
                    </Box>
                    <Box flex="1">
                        <Box className="media_priceItem"
                            fontSize="18px"
                            fontWeight="200"
                            mt="20px"
                            fontFamily="monospace"

                        >
                            R$ {item.price}
                        </Box>
                    </Box>
                    <Box margin="10px">
                        <Box className="media_btnsItem"
                            display="block"
                        >
                            <DeleteItem item={item}><Box><ClearIcon /></Box></DeleteItem>
                            <Box mt="10px">
                                <FavoriteBorderOutlinedIcon />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div >
    )
}


export default ItemCart;