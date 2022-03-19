import { Box } from "@mui/system"
import React, { useContext } from "react"
import { LoginContext } from "../../utils/loginprovider"
import "./login.css"


const LoginInput = () => {

    const { loginEmail ,setLoginEmail } = useContext(LoginContext)


    return (
        <div>
            <Box>
                <Box >
                    <input className="input_login"  placeholder="Email" onChange={(e: any) => setLoginEmail(e.target.value)} value={loginEmail}/>
                </Box>
            </Box>
        </div>
    )
}


export default LoginInput;