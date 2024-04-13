import React from "react";
import styled, { css } from "styled-components";
import { DeletableTile } from "../Shared/tile";

export const StyledCoinHeadGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const CoinSymbol = styled.div`
  justify-self: right;
`;

const DeleteIcon = styled.div`
  justify-self: right;
  display: none;
  ${DeletableTile}:hover & {
    display: block;
    color: red;
  }
  // on hover of deletableTile please show deleteIcon with color red
`;

export default function ({ name, symbol, topSection }) {
  return (
    <StyledCoinHeadGrid>
      <div>{name}</div>
      {topSection ? (
        <DeleteIcon>X</DeleteIcon>
      ) : (
        <CoinSymbol>{symbol}</CoinSymbol>
      )}
    </StyledCoinHeadGrid>
  );
}

// StyledCoinHeadGrid styled component with apply grid to it's children
