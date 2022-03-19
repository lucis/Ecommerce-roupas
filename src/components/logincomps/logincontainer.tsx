import React, { useContext } from "react"
import { Box } from "@mui/system";
import { Link } from 'react-router-dom'
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import LoginInput from "./logininput";
import LoginPasswd from "./loginpasswd";
import BtnLogin from "./btnlogin";
import HeaderLogin from "./headerlogin"
import Header2Login from "./header2login";
import { LoginContext } from "../../utils/loginprovider";
import LoginWithBtn from "./loginwithbtn";




const LoginContainer = () => {

    return (
        <div >
            <Box ml="200px" display="flex" justifyContent="space-between">
                <Box>
                </Box>
                <Box display="block" >
                    <Box>
                        <HeaderLogin />
                    </Box>
                    <Box mt="20px" >
                        <Box fontSize="20px"
                            fontWeight="500"
                            fontFamily="monospace">
                            <label>Email:</label>
                        </Box>
                        <LoginInput />
                    </Box>
                    <Box mt="20px">
                        <Box fontSize="20px"
                            fontWeight="500"
                            fontFamily="monospace">
                            <label>Senha:</label>
                        </Box>
                        <LoginPasswd />
                    </Box>
                    <Box mt="25px" textAlign="center">
                        <BtnLogin>IDENTIFIQUE-SE<Box><ArrowForwardOutlinedIcon /></Box></BtnLogin>
                    </Box>
                    <Box mt="20px">
                        ou
                    </Box>
                    <Box mt="20px" >
                        <LoginWithBtn><Box display="flex"><Box margin="10px">GOOGLE</Box><Box mt="3px" ml="10px"><img width="30px" src="https://cdn.icon-icons.com/icons2/836/PNG/512/Google_icon-icons.com_66793.png" /></Box></Box></LoginWithBtn>
                    </Box>

                </Box>
                <Box width="40%" mr="200px">
                    <Header2Login />
                </Box>
            </Box>
        </div>
    )
}

export default LoginContainer;