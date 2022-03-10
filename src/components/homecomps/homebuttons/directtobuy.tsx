import { Box } from "@mui/system";
import React, { FC } from "react";



const DirectToBuy: FC = ({ children }) => {
    return (
        <div>
            <Box>
                <button>{children}</button>
            </Box>
        </div>
    )
}


export default DirectToBuy;