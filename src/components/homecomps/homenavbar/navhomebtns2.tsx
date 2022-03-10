import { Box } from '@mui/system';
import React, { FC } from 'react'
import "./navhome.css"


const NavHomeBtns2: FC = ({ children }) => {

    return (
        <div>
            <Box className="container_btns" >
               <button className='btns2'>{children}</button>
            </Box>
        </div>
    )
}


export default NavHomeBtns2;