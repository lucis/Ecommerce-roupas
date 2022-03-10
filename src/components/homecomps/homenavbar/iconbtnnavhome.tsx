import { Box } from '@mui/system'
import React, { FC } from 'react'



const IconBtnNavHome: FC = ({children}) => {
    return(
        <div>
            <Box>
                 <button className='icon_btn'>{children}</button>
            </Box>
        </div>
    )
}


export default IconBtnNavHome;