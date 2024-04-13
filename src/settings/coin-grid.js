import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "../App/app-provider";

export const StyledDisplayGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`

export default function ({}) {
    return(
        <AppContext.Consumer>
            {({coinsList}) => {
                return <StyledDisplayGrid>{Object.keys(coinsList).map(coinKey => {
                    return (
                        <div>
                            {coinKey}
                        </div>
                    )
                })}</StyledDisplayGrid>
            }}
        </AppContext.Consumer>
    )
}