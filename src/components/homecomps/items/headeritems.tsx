import { Box } from '@mui/system';
import React from 'react';


const HeaderItem = () => {
    return (
        <div >
            <Box justifyContent="center"
            display="flex">
                <Box borderBottom="0.2px solid gray"
                    borderTop="0.2px solid gray"
                    padding="5px"
                    width="80%"
                >
                    <Box width="130px" >
                        <Box fontSize="10px"
                            fontFamily="monospace"
                            padding="10px"
                            ml="10px"
                            borderBottom="3px solid black">
                            <h1>NOVIDADES</h1>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}


export default HeaderItem;