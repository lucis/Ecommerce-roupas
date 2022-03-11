import { Box } from "@mui/system"
import React from "react"


const HeaderBuy = () => {
    return (
        <div>
            <Box color="white" fontSize="12px" >
                <Box className="container_header_float">
                    <h1>Nova camisa do Flamengo</h1>
                    <h1>temporada 22/23,</h1>
                </Box>
                <Box p="10px" className="container_header_float" >
                    <h2>já está disponível!</h2>
                </Box>
            </Box>
        </div>
    )
}


export default HeaderBuy;