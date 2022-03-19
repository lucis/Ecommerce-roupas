import React, { FC, useContext } from "react"
import { Box } from "@mui/system";
import { createUserWithEmailAndPassword } from "firebase/auth"
import { LoginContext } from "../../utils/loginprovider"
import { auth } from "../../utils/firebaseconfig"
import "./register.css"



const BtnRegister: FC = ({ children }) => {

    const { registerEmail, registerPasswd } = useContext(LoginContext)

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPasswd)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Box>
                <button className="btn_register" onClick={register}>{children}</button>
            </Box>
        </div>
    )
}


export default BtnRegister;