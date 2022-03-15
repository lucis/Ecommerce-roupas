import { Box } from '@mui/system';
import React, { Children, FC } from 'react';
import "./itemcart.css"


const FinishBuyBtn: FC = ({children}) => {
    return(
        <div>
            <Box>
                <button className='btn_finish'>{children}</button>
            </Box>
        </div>
    )
}

export default FinishBuyBtn;