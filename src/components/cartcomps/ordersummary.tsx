import { Box } from "@mui/system"
import React, { FC, useContext } from "react"
import { CartContext } from "../../utils/cartprovider"




const OrderSummary: FC = () => {

    const { cart, totalValue } = useContext(CartContext)
    const itemCount = Object.keys(cart).length


    return (
        <div>
            <Box width="85%"
                border="0.04px solid rgb(0,0,0,1)"
                padding="20px"
                position="relative"
                right="70px">
                <Box fontSize="20px"
                    fontWeight="700">
                    RESUMO DO PEDIDO
                </Box>
                <Box display="flex" justifyContent="flex-end" fontSize="14px" mt="20px">
                    <Box flex="1">
                        {itemCount > 0 && <span>{itemCount}</span>}  PRODUTOS
                    </Box>
                    <Box  >
                        R$ {totalValue}
                    </Box>
                </Box>
                <Box display="flex"
                    justifyContent="flex-end"
                    fontSize="14px" mt="15px">
                    <Box flex="1">
                        ENTREGA
                    </Box>
                    <Box >
                        {totalValue > 300 ? "FRETE GRÁTIS" : "R$ 20,00"}
                    </Box>
                </Box>
                <Box fontWeight="700" mt="10px" >
                    {totalValue < 300 ? <Box>Adicione mais R$ {300 - totalValue} para ganhar FRETE GRÁTIS</Box> : ""}
                </Box>
                <Box display="flex"
                    justifyContent="flex-end"
                    fontSize="14px"
                    mt="25px"
                    fontWeight="800">
                    <Box flex="1">
                        TOTAL:
                    </Box>
                    <Box >
                        R$ {totalValue}
                    </Box>
                </Box>
            </Box>
        </div>
    )
}


export default OrderSummary;
