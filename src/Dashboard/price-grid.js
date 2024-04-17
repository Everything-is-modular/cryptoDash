import React from "react";
import { AppContext } from "../App/app-provider"
import styled from "styled-components";
import PriceTile from "./price-tile";

const StyledPriceGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
    margin-top: 40px;
`

export default function () {
    return(
        <AppContext.Consumer>
            {({prices}) => {
                return(
                    <StyledPriceGrid>
                        {prices.map((price, index) => {
                        return <PriceTile index={index} price={price} />})}
                    </StyledPriceGrid>
                )
            }}
        </AppContext.Consumer>
    )
}