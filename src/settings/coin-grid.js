import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "../App/app-provider";
import { Tile, SelectableTile } from '../Shared/tile'

export const StyledDisplayGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
`

export default function ({}) {
    return(
        <AppContext.Consumer>
            {({coinsList}) => {
                return <StyledDisplayGrid>{Object.keys(coinsList).map(coinKey => {
                    return (
                        <SelectableTile key={coinKey}>
                            {coinKey}
                        </SelectableTile>
                    )
                })}</StyledDisplayGrid>
            }}
        </AppContext.Consumer>
    )
}