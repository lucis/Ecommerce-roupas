import React, { useState } from "react";
import { Box } from "@mui/system"
import { Link } from "react-router-dom"
import { Button } from "@mui/material";
import CloseTwoToneIcon from '@material-ui/icons/CloseTwoTone';

const HeaderNavDown = () => {

    const [show, setShow] = useState(true)

    const hide = () => {
        setShow(!show)
    }

    return (
        <div>
            {show ? <Box bgcolor="#007bc6"
                p="1px"
                color="white"
                display="flex"
                justifyContent="flex-end"

            >
                <Box display="flex" margin="auto" >
                    Cadastre-se para receber 15% de desconto. <Link to="/"><Box color="white" ml="5px"> Entre para o clube</Box></Link>
                </Box>
                <Box mt="4px" mr="6px">
                    <Button onClick={hide} ><Box mt="4px" color="white"><CloseTwoToneIcon /></Box></Button>
                </Box>



            </Box>

                : <Box display="none" />}
        </div >
    )
}


export default HeaderNavDown;