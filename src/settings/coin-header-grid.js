import React from "react";
import styled, {css} from "styled-components";

export const StyledCoinHeadGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`

export const CoinSymbol = styled.div`
    justify-self: right;
`

export default function({name, symbol}) {
    return (
        <StyledCoinHeadGrid>
            <div>{name}</div>
            <CoinSymbol>{symbol}</CoinSymbol>
        </StyledCoinHeadGrid>
    )
}