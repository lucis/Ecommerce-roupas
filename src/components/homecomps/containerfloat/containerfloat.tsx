import React from 'react'
import { Box } from "@mui/system";
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import "../../../pages/home/homepag.css"
import HeaderBuy from './headerbuy';
import DirectToBuy from '../homebuttons/directtobuy';


const ContainerFloat = () => {
    return (
        <div>
            <Box>
                <Box className="container_float">
                    <Box className="container_img" />
                    <HeaderBuy />
                    <Box mt="10px"
                        ml="5px"
                        padding="2px"
                        className="container_btn_buy">
                        <DirectToBuy><Box display="flex">Comprar Agora!<Box ml="3px"><ArrowForwardOutlinedIcon /></Box></Box></DirectToBuy>
                    </Box>

                </Box>
            </Box>
        </div >
    )
}


export default ContainerFloat;