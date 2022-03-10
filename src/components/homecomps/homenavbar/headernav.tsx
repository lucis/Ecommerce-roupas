import React from "react"
import { Box } from "@mui/system"
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import DoneRoundedIcon from '@material-ui/icons/DoneRounded';
import DoneAllTwoToneIcon from '@material-ui/icons/DoneAllTwoTone';

import "./navhome.css"

const HeaderNav = () => {
    return (
        <div>
            <Box 
                bgcolor="black"
                color="white"
                p="3px"
                fontSize="8px"
                display="flex"
                justifyContent="space-around"

            >
                <Box className="headernav" display="flex"  >
                    <LocalShippingOutlinedIcon /><Box ml="8px" mt="3px" fontFamily="monospace"><h1>Entrega rápida</h1></Box>
                </Box>
                <Box className="headernav" display="flex" >
                    <DoneRoundedIcon /><Box ml="8px" mt="3px" fontFamily="monospace"><h1>Compre também pelo nosso whatsapp</h1></Box>
                </Box>
                <Box className="headernav" display="flex" >
                    <DoneAllTwoToneIcon /><Box ml="8px" mt="3px" fontFamily="monospace"><h1>As melhores ofertas!</h1></Box>
                </Box>
            </Box>
        </div >
    )
}


export default HeaderNav;