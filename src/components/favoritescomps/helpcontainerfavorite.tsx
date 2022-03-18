import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


const HelpContainerFavorite = () => {
    return (
        <div>
            <Box width="70%" display="block">
                <Box fontSize="10px">
                    <h1>PRECISA DE AJUDA?</h1>
                </Box>
                <Box >
                    <Link className="link_favorite"  to="/favorites">
                        <Box className="link_favorite" mt="10px">
                            Produtos
                        </Box>
                    </Link>
                    <Link className="link_favorite" to="/favorites">
                        <Box className="link_favorite" mt="10px">
                            Pedidos e Pagamentos
                        </Box>
                    </Link>
                    <Link className="link_favorite" to="/favorites">
                        <Box className="link_favorite" mt="10px">
                            Entrega
                        </Box>
                    </Link>
                    <Link className="link_favorite" to="/favorites">
                        <Box className="link_favorite" mt="10px">
                            Promoções e Cupons
                        </Box>
                    </Link>
                    <Link className="link_favorite" to="/favorites">
                        <Box className="link_favorite" mt="10px">
                            Retornos e Estornos
                        </Box>
                    </Link>
                    <Link className="link_favorite" to="/favorites">
                        <Box className="link_favorite" mt="10px">
                            Cadastro e Newsletter
                        </Box>
                    </Link>
                    <Link className="link_favorite" to="/favorites">
                        <Box className="link_favorite" mt="10px">
                            informações da empresa
                        </Box>
                    </Link>
                </Box>
            </Box>
        </div>
    )
}


export default HelpContainerFavorite;