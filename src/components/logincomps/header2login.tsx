import { Box } from "@mui/system"
import { Link } from "react-router-dom"
import CheckIcon from '@material-ui/icons/Check';
import React from "react"
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import "./login.css"

const Header2Login = () => {
    return (
        <div>
            <Box>
                <Box fontSize="20px">
                    <h1>ENTRE PARA O CLUBE. RECEBA BENEFÍCIOS</h1>
                </Box>
                <Box mt="10px">Entre para o adiclub e ganhe benefícios hoje:</Box>
                <Box padding="15px">
                    <Box display="flex">
                        <Box>
                            <CheckIcon />
                        </Box>
                        <Box>É por isso que quando você entra para o Clube você ganha 15% de desconto.</Box>
                    </Box>
                    <Box mt="10px" display="flex">
                        <Box>
                            <CheckIcon />
                        </Box>
                        <Box>Acesso as melhores promoções</Box>
                    </Box>
                    <Box mt="10px" display="flex">
                        <Box>
                            <CheckIcon />
                        </Box>
                        <Box>Ganhar pontos para desbloquear benefícios exclusivos</Box>
                    </Box>
                    <Box mt="10px" display="flex">
                        <Box>
                            <CheckIcon />
                        </Box>
                        <Box>Acesso antecipado aos lançamentos mais esperados</Box>
                    </Box>
                </Box>
                <Box>
                    Se você gosta de esporte, moda, sustentabilidade e cultura, no adiClub você pode ganhar benefícios para elevar ainda mais sua paixão.
                </Box>
                <Box mt="20px">
                    Entre agora para o Clube para atingir seus objetivos e ficar mais perto do que você ama e ainda ter acesso ao melhor da adidas.
                </Box>
                <Box mt="20px">
                    Quer saber mais sobre o adiClub?
                </Box>
                <Link  className="link_header2" to="/register"><Box mt="20px"><button  className="btn_header2">ENTRE PARA O CLUB<ArrowForwardOutlinedIcon /></button></Box></Link>
            </Box>
        </div>
    )
}


export default Header2Login;