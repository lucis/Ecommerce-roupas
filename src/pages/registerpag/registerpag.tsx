import { Box } from "@mui/system";
import React from "react";
import HeaderNav from "../../components/homecomps/homenavbar/headernav";
import HomeNavBar from "../../components/homecomps/homenavbar/homenavbar";
import RegisterContainer from "../../components/registercomps/registercontainer";


const RegisterPag = () => {
    return (
        <div>
            <Box>
                <HeaderNav />
                <HomeNavBar />
                <hr style={{ border: "0", height: "0", borderTop: "1px solid rgba(0, 0, 0, 0.1)" }} />
                <RegisterContainer />
            </Box>
        </div>
    )
}


export default RegisterPag;