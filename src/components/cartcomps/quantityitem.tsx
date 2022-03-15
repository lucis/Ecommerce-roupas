import { Box } from "@mui/system";
import React from "react";
import "./itemcart.css"


const QuantityItem = () => {
    return (
        <div>
            <Box border="1px solid black"
                width="100px" 
                >
                <select className="select_quantity">
                    <option>1</option>
                    <option>2</option>
                </select>
            </Box>
        </div>
    )
}


export default QuantityItem;