import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "../App/app-provider";
import { Tile, SelectableTile } from '../Shared/tile'
import CoinTile from "./coin-tile";

export const StyledDisplayGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
    margin-top: 40px;
`

function getCoinsToDisplay(coinsList) {
    return Object.keys(coinsList).slice(0,100)
}

export default function ({}) {
    return(
        <AppContext.Consumer>
            {({coinsList}) => {
                return <StyledDisplayGrid>{getCoinsToDisplay(coinsList).map(coinKey => {
                    return (
                        <CoinTile coinKey={coinKey}/>
                    )
                })}</StyledDisplayGrid>
            }}
        </AppContext.Consumer>
    )
}