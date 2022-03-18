import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom"
import "./itemcart.css"


const HelpContainer = () => {
    return (
        <div>
            <Box>
                <Box fontSize="16px"
                    fontFamily="monospace"
                    fontWeight="600"
                >PRECISA DE AJUDA?</Box>
                <Link className="links_help" to="/cart">
                    <Box mt="20px" className="links_help">
                        Reembolsos
                    </Box>
                </Link>
                <Link className="links_help" to="/cart">
                    <Box mt="10px" className="links_help">
                        Como usar o Cupom de Desconto
                    </Box>
                </Link>
                <Link className="links_help" to="/cart">
                    <Box mt="10px" className="links_help">
                        Informações de entrega. Prazos e frete
                    </Box>
                </Link>
                <Link className="links_help" to="/cart">
                    <Box mt="10px" className="links_help">
                        Trocas ou devoluções
                    </Box>
                </Link>
            </Box>
        </div >
    )
}


export default HelpContainer;