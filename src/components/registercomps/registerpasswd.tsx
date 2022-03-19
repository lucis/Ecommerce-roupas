import React, { useContext } from "react"
import { Box } from "@mui/system"
import { LoginContext } from "../../utils/loginprovider"

const RegisterPasswd = () => {

    const { registerPasswd, setRegisterPasswd } = useContext(LoginContext)

    return (
        <div>
            <Box>
                <input className="input_register" type="password" onChange={(e: any) => setRegisterPasswd(e.target.value)} value={registerPasswd} />
            </Box>
        </div>
    )
}


export default RegisterPasswd;