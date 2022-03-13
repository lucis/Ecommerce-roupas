import { Box } from "@mui/system";
import React, { FC } from "react";
import "./itemdetails.css"


const BtnAddCart: FC = ({ children }) => {
    return (
        <div>
            <Box position="relative"
            top="120px">
                <button className="btn_addcart">{children}</button>
            </Box>
        </div>
    )
}


export default BtnAddCart;