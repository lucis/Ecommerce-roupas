import { Box } from "@mui/system";
import { Input,Button } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import React from "react"


const SearchNavHome = () => {
    return (
        <div>
            <Box bgcolor="#e9ecef" borderRadius="5px">
                <Box display="flex"  padding="1px" color="black" > <Input  placeholder="Procurar"/><Button>< SearchOutlinedIcon /></Button></Box>
            </Box>
        </div>
    )
}


export default SearchNavHome;