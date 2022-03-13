import { Box } from '@mui/system';
import * as React from 'react';
import "./container_imgfla.css"
import ContainerFloatFla from './headerfloatfla';

const ContainerImgFla = () => {
    return (
        <div>
            <Box className="container_imgfla">
                <Box mt="20px">
                    <ContainerFloatFla />
                </Box>
            </Box>
        </div>
    )
}


export default ContainerImgFla;