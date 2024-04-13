import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "../App/app-provider";
import CoinTile from "./coin-tile";

export const StyledDisplayGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
    margin-top: 40px;
`

function getCoinsToDisplay(coinsList, topSection) {
    return Object.keys(coinsList).slice(0,topSection ? 10 : 100)
}

export default function ({topSection}) {
    return(
        <AppContext.Consumer>
            {({coinsList}) => {
                return <StyledDisplayGrid>{getCoinsToDisplay(coinsList, topSection).map(coinKey => {
                    return (
                        <CoinTile topSection={topSection} coinKey={coinKey}/>
                    )
                })}</StyledDisplayGrid>
            }}
        </AppContext.Consumer>
    )
}

// StyledDisplayGrid component for layout of coin Tiles
// CoinTile component to display tiles