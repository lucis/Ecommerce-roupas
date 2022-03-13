import { Box } from "@mui/system";
import React, { useMemo } from "react";
import HeaderNav from "../../components/homecomps/homenavbar/headernav";
import HomeNavBar from "../../components/homecomps/homenavbar/homenavbar";
import ItemsDetails from "../../components/items_details/itemsdetails";
import { useLocation } from "react-router-dom"

const ItemsDetailsPag = () => {

    const useQuery = () => {
        const { search } = useLocation()

        return useMemo(() => new URLSearchParams(search)
            , [search])
    }


    return (
        <div>
            <Box>
                <HeaderNav />
                <HomeNavBar />
                <ItemsDetails
                    producturl={useQuery().get("product") ?? ""}
                    imgurl={useQuery().get("img") ?? ""}
                    priceurl={useQuery().get("price") ?? ""}
                    descriptionurl={useQuery().get("description") ?? ""} />
            </Box>
        </div>
    )
}


export default ItemsDetailsPag;