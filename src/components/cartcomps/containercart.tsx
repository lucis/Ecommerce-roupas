import { Box } from "@mui/system";
import React, { useContext, useEffect } from "react";
import ItemCart from "./itemcart";
import { CartContext } from "../../utils/cartprovider";
import ContainerFloatCart from "./containerflaotcart";
import OrderSummary from "./ordersummary";
import FinishBuyBtn from "./finishbuybtn";
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import "./itemcart"
import TicketContainer from "./ticketcontainer";
import HelpContainer from "./helpcontainer";
import PayWithContainer from "./paywithcontainer";



const ContainerCart = () => {

    const { cart, totalValue, setTotalValue } = useContext(CartContext)

    useEffect(() => {
        let value = 0
        {
            cart.map((item: any) => {
                value = value + parseFloat(item.price)
            })
        }
        setTotalValue(value.toFixed(2))
    }, [cart])

    const ItemCount = Object.keys(cart).length
    return (
        <div>
            <Box display="flex"
                position="relative"
                top="20px"

            >
                <Box display="block"
                    position="relative"
                    left="180px"
                    flex="2">
                    <Box  >
                        <Box fontSize="20px" padding="5px">
                            <h1>SEU CARRINHO</h1>
                        </Box>

                        <Box display="flex"
                            fontWeight="350"
                            fontSize="15px"
                            padding="5px">
                            TOTAL ({ItemCount} produtos) <Box ml="10px"><h4>R$ {totalValue}</h4></Box>
                        </Box>
                        <Box mt="20px">
                            <ContainerFloatCart />
                        </Box>
                    </Box>
                    <Box>
                        {cart.map((item: any) => (<ItemCart item={item} />))}
                    </Box>
                </Box>
                <Box display="block" flex="1">
                    <Box borderBottom="1px solid black"
                        position="relative"
                        right="70px"
                        borderRight="1px solid black"
                        width="437px"
                        height="50px"
                        mb="50px"
                        borderLeft="1px solid black"
                        mt="80px"
                    >
                        <Box
                            border="none"
                        >
                            <FinishBuyBtn><Box display="flex" justifyContent="flex-end"><Box ml="4px" mt="4px">FINALIZAR</Box><Box ml="302px" mt="4px"><ArrowForwardOutlinedIcon /></Box></Box></FinishBuyBtn>
                        </Box>
                    </Box>
                    <OrderSummary />
                    <Box position="relative" right="70px" mt="40px">
                        <TicketContainer />
                    </Box>
                    <Box position="relative" right="70px" mt="40px"> 
                        <HelpContainer />
                    </Box>
                    <Box position="relative" right="70px" mt="40px">
                        <PayWithContainer />
                    </Box>
                </Box>
            </Box>
        </div>
    )
}


export default ContainerCart;