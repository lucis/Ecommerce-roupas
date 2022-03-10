import { Box } from '@mui/system';
import React, { FC } from 'react'
import "./navhome.css"


const NavHomeBtns: FC = ({ children }) => {

    return (
        <div>
            <Box className="container_btns" >
                <button className='btns'>{children}</button>
            </Box>
        </div>
    )
}


export default NavHomeBtns;