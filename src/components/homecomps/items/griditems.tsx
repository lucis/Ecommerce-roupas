import React, { useContext } from "react";
import { styled } from '@mui/material/styles';
import { Box } from "@mui/system";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ItemsContext } from "../../../utils/itemsprovider"
import ItemsProduct from "./itemsproduct"


const GridItems = () => {


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


    return (
        <div>
            <Box >
                <Grid  >
                    <Grid>
                        <Item><ItemsProduct /></Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}


export default GridItems;