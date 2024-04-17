import React from "react";
import { Tile } from "../Shared/tile";
import { AppContext } from "../App/app-provider";
import CoinImage from '../Shared/coin-image'
import styled from "styled-components";

const SpotLightName = styled.h2`
    text-align: center
`

function CoinSpotlight() {
    return(
        <AppContext.Consumer>
            {({currentFavorite, coinsList}) => {
                return(
                    <Tile>
                        <SpotLightName>{coinsList[currentFavorite]['CoinName']}</SpotLightName>
                        <CoinImage coin={coinsList[currentFavorite]} spotlight />
                    </Tile>
                )
            }}
        </AppContext.Consumer>
    )
}

export default CoinSpotlight