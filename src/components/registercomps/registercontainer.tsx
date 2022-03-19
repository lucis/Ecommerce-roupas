import { Box } from "@mui/system"
import React from "react"
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import Header2Login from "../logincomps/header2login";
import BtnRegister from "./btnregister";
import HeaderRegister from "./headerregister";
import RegisterInput from "./registerinput";
import RegisterPasswd from "./registerpasswd";
import RegisterWithBtn from "./registerwithbtn";



const RegisterContainer = () => {
    return (
        <div>
            <Box ml="200px" mr="200px" display="flex" justifyContent="space-around ">
                <Box width="30%">
                    <Box>
                        <HeaderRegister />
                        <Box mt="15px" >
                            <RegisterWithBtn><Box display="flex"><Box margin="10px">GOOGLE</Box><Box mt="3px" ml="10px"><img width="30px" src="https://cdn.icon-icons.com/icons2/836/PNG/512/Google_icon-icons.com_66793.png" /></Box></Box></RegisterWithBtn>
                        </Box>
                    </Box>
                    <Box mt="20px">
                        <Box fontSize="20px"
                            fontWeight="500"
                            fontFamily="monospace">
                            <label>Email:</label>
                        </Box>
                        <RegisterInput />
                    </Box>
                    <Box mt="20px">
                        <Box fontSize="20px"
                            fontWeight="500"
                            fontFamily="monospace">
                            <label>Senha:</label>
                        </Box>
                        <RegisterPasswd />
                    </Box>
                    <Box mt="20px">
                        <BtnRegister>CADASTRAR<ArrowForwardOutlinedIcon /></BtnRegister>
                    </Box>
                </Box>
                <Box width="40%">
                    <Header2Login />
                </Box>
            </Box>
        </div>
    )
}


export default RegisterContainer;