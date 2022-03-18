import React from "react";
import { Box } from "@mui/system";

import HeaderFavorites from "./headerfavorites"
import HelpContainerFavorite from "./helpcontainerfavorite";
import ItemFavorite from "./itemfavorite";
import DeleteFavorite from "./deletefavorites";

const ContainerFavorites = () => {
    return (
        <div>
            <Box >
                <Box ml="160px" display="flex" mt="20px">
                    <Box flex="2" mr="35px" >
                        <HeaderFavorites />
                        <Box mt="30px" width="100%" display="flex">
                            <ItemFavorite />
                        </Box>
                    </Box>
                    <Box flex="1">
                        <HelpContainerFavorite />
                    </Box>
                </Box>
            </Box>
        </div>
    )
}


export default ContainerFavorites;