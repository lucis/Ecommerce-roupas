import { Box } from "@mui/system";
import React from "react";
import AddIcon from '@material-ui/icons/Add';



const TicketContainer = () => {
    return (
        <div>
            <Box border="2px solid black"  display='flex'>
                <input className="ticket_container" placeholder="Digite seu cupom promocional" />
                <Box mt="10px" mr="10px">
                    <AddIcon  />
                </Box>
            </Box>
        </div>
    )
}


export default TicketContainer;