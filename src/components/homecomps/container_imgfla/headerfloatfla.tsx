import React from "react"
import { Box } from '@mui/system';
import BtnImgFla from "./btnimgfla"
import "./container_imgfla.css"


const ContainerFloatFla = () => {
    return (
        <div className="container_headerimg">
            <Box  color="white">
                <Box padding="5px" className="header_imgfla">
                    <h1>UMA VEZ FLAMENGO, SEMPRE FLAMENGO!</h1>
                </Box>
                <Box padding="5px" className="header_imgfla2">
                    Garanta o novo manto do mengão e celebre toda essa tradição.
                </Box>
                <Box padding="15px">
                    <BtnImgFla>Ver coleção</BtnImgFla>
                </Box>
            </Box>
        </div>
    )
}


export default ContainerFloatFla;