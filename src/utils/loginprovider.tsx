import { AnyRecord } from "dns"
import React, { FC, useState, createContext, useCallback, useEffect } from "react"


interface Props {
    registerEmail: any
    setRegisterEmail(re: any): any
    registerPasswd: any
    setRegisterPasswd(re: any): any
    loginEmail: any
    setLoginEmail(lo: any): any
    loginPasswd: any
    setLoginPasswd(lo: any): any
    user: any
    setUser(u: any): any
}
export const LoginContext = createContext<Props>({
    registerEmail: " ",
    setRegisterEmail: () => { },
    registerPasswd: "",
    setRegisterPasswd: () => { },
    loginEmail: "",
    setLoginEmail: () => { },
    loginPasswd: "",
    setLoginPasswd: () => { },
    user: {},
    setUser: () => { },
})

const LoginProvider: FC = ({ children }) => {

    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPasswd, setRegisterPasswd] = useState("")
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPasswd, setLoginPasswd] = useState("")
    const [user, setUser] = useState<any>({})
    const { navigate } = useNavigator()

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                navigate('/logado')
            }
            setUser(user)
         })
    }, [])

    const loginWithEmailAndPassword = useCallback((({} : EmailPassword)) => {

    }, []) 

    return (
        <LoginContext.Provider value={
            {
                registerEmail,
                setRegisterEmail,
                registerPasswd,
                setRegisterPasswd,
                loginEmail,
                setLoginEmail,
                loginPasswd,
                setLoginPasswd,
                user,
                setUser,

            }}>
            {children}
        </LoginContext.Provider >
    )
}

export default LoginProvider;