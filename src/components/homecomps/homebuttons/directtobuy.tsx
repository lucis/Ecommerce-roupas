import { Box } from "@mui/system";
import React, { FC } from "react";
import "../../../pages/home/homepag.css"



const DirectToBuy: FC = ({ children }) => {
    return (
        <div>
            <Box>
                <button className="btn_buy">{children}</button>
            </Box>
        </div>
    )
}


export default DirectToBuy;