import { Box } from "@mui/system"
import React, { FC, useContext } from "react"
import { LoginContext } from "../../utils/loginprovider"
import { signInWithEmailAndPassword,onAuthStateChanged} from "firebase/auth"
import { auth } from "../../utils/firebaseconfig"
import "./login.css"


const BtnLogin: FC = ({ children }) => {

    const { loginEmail, loginPasswd, setUser } = useContext(LoginContext)

    onAuthStateChanged(auth, (currentUser: any) => {
        setUser(currentUser)
    })

    const login = async () => {
        try {
            const userLogin = await signInWithEmailAndPassword(auth, loginEmail, loginPasswd)
            console.log(userLogin)
        } catch (error: any) {
            console.log(error)
        }
    }
    return (
        <div>
            <Box>
                <button className="btn_login" onClick={login} >{children}</button>
            </Box>
        </div>
    )
}


export default BtnLogin;