import React, { FC } from "react"
import { Box } from "@mui/system"
import { signinWithGoogle } from "../../utils/firebaseconfig"
import "./login.css"

const LoginWithBtn: FC = ({ children }) => {



    return (
        <div>
            <Box>
                <button onClick={signinWithGoogle} className="btn_loginwith">{children}</button>
            </Box>
        </div>
    )
}


export default LoginWithBtn;