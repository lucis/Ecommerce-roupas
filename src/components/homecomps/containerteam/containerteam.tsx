import React from "react";
import { Box } from "@mui/system";

const TEAMS = [
    {
        img: "https://logodetimes.com/times/flamengo/logo-flamengo-1536.png"
    },
    {
        img: "https://i1.wp.com/dreamleaguesoccer.com.br/wp-content/uploads/2016/11/escudo-Corinthians.png?resize=512%2C512&ssl=1"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/1200px-Palmeiras_logo.svg.png"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/pt/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/1200px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/pt/thumb/4/43/FCBarcelona.svg/1010px-FCBarcelona.svg.png"
    },
]

const ContainerTeam = () => {
    return (
        <div>
            <Box bgcolor="rgb(235, 237, 238)"
                padding="10px"
                justifyContent="center"
                display="flex"

            >
                <Box textAlign="center">
                    <Box fontSize="8px" fontFamily="monospace" >
                        <h1>ESCOLHA SEU TIME</h1>
                    </Box>
                    <Box display="flex">
                        {TEAMS.map(team => (<Box padding="4px" margin="7px"><img width="50px" src={team.img} /></Box>))}
                    </Box>
                </Box>
            </Box>
        </div>
    )
}


export default ContainerTeam;