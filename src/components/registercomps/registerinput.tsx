import React, { useContext } from "react"
import { Box } from "@mui/system"
import { LoginContext } from "../../utils/loginprovider"
import "./register.css"

const RegisterInput = () => {

    const { registerEmail, setRegisterEmail } = useContext(LoginContext)

    return (
        <div>
            <Box>
                <input className="input_register" onChange={(e: any) => setRegisterEmail(e.target.value)} value={registerEmail} />
            </Box>
        </div>
    )
}


export default RegisterInput;