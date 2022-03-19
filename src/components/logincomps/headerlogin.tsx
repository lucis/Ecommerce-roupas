import { Box } from "@mui/system"
import React from "react"
import { Link } from "react-router-dom";



const HeaderLogin = () => {
    return (
        <div>
            <Box display="block">
                <Box fontSize="22px">
                    <h1>IDENTIFIQUE-SE</h1>
                </Box>
                <Link className="link_login" to="/login">
                    <Box className="link_login" fontSize="15px" mt="10px" mb="10px">
                        esqueceu sua senha?
                    </Box>
                </Link>
            </Box>
        </div>
    )
}


export default HeaderLogin;