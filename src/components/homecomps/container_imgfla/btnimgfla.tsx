import { Box } from "@mui/system";
import React, { FC } from "react";


const BtnImgFla: FC = ({ children }) => {
    return (
        <div>
            <Box>
                <button className="btn_imgfla">{children}</button>
            </Box>
        </div>
    )
}



export default BtnImgFla;