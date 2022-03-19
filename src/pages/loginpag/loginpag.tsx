import { Box } from "@mui/system"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import React, { FC, useState } from "react"
import HeaderNav from "../../components/homecomps/homenavbar/headernav"
import HomeNavBar from "../../components/homecomps/homenavbar/homenavbar"
import LoginContainer from "../../components/logincomps/logincontainer"
import { auth } from "../../utils/firebaseconfig"


const LoginPag = () => {

    return (
        <div>
            <Box>
                <HeaderNav />
                <HomeNavBar />
                <hr style={{ border: "0", height: "0", borderTop: "1px solid rgba(0, 0, 0, 0.1)" }} />
                <LoginContainer />
            </Box>
        </div>
    )
}


export default LoginPag;