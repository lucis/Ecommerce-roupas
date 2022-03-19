import { Box } from "@mui/system";
import { signinWithGoogle } from "../../utils/firebaseconfig"
import React, { FC } from "react"
import "../logincomps/login.css"


const RegisterWithBtn: FC = ({ children }) => {
    return (
        <div>
            <Box>
                <button onClick={signinWithGoogle} className="btn_loginwith">{children}</button>
            </Box>
        </div>
    )
}


export default RegisterWithBtn;