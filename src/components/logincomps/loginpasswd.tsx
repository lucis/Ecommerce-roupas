import { Box } from "@mui/system"
import React, { useContext } from "react"
import { LoginContext } from "../../utils/loginprovider"
import "./login.css"


const LoginPasswd = () => {

    const { loginPasswd, setLoginPasswd } = useContext(LoginContext)

    return (
        <div>
            <Box>
            <input className="input_login" type="password"  placeholder="Senha" onChange={(e: any) => setLoginPasswd(e.target.value)} value={loginPasswd}/>
            </Box>
        </div>
    )
}


export default LoginPasswd;