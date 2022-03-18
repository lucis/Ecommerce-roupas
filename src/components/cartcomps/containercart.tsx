import { Box } from "@mui/system";
import React, { useContext, useEffect } from "react";
import ItemCart from "./itemcart";
import { CartContext } from "../../utils/cartprovider";
import ContainerFloatCart from "./containerflaotcart";
import OrderSummary from "./ordersummary";
import FinishBuyBtn from "./finishbuybtn";
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import "./itemcart.css"
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
        <div className="media_container">
            <Box display="flex" ml="160px" mr="160px">
                <Box flex="1">
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
                    <Box display="block"

                        flex="2">
                        <Box>
                            {cart.map((item: any) => (<ItemCart item={item} />))}
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Box flex="2" className="media_orderSummary" >
                        <Box borderBottom="1px solid black"
                            borderRight="1px solid black"
                            width="101%"
                            height="50px"
                            borderLeft="1px solid black"
                            mt="50px"
                        >
                            <FinishBuyBtn><Box display="flex" justifyContent="flex-end">
                                <Box ml="4px" mt="4px">
                                    FINALIZAR
                                </Box>
                                <Box ml="280px" mt="4px">
                                    <ArrowForwardOutlinedIcon />
                                </Box>
                            </Box>
                            </FinishBuyBtn>
                        </Box>
                        <Box mt="30px">
                            <OrderSummary />
                        </Box>
                        <Box mt="20px">
                            <TicketContainer />
                        </Box>
                        <Box mt="30px">
                            <HelpContainer />
                        </Box>
                        <Box mt="30px" >
                            <PayWithContainer />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}


export default ContainerCart;