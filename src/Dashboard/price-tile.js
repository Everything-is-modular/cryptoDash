import React from "react";
import styled, { css } from "styled-components";
import { SelectableTile } from "../Shared/tile";
import { fontSize3, fontSizeBig } from "../Shared/styles";
import { StyledCoinHeadGrid } from "../settings/coin-header-grid";

const numberFormat = (number) => {
  return +(number + "").slice(0, 7);
};

const TickerPrice = styled.div`
  ${fontSizeBig}
`;

const ChangePercent = styled.div`
  ${(props) =>
    props.isPositive &&
    css`
      color: green;
    `}
  color: red;
`;

const StyledPriceTile = styled(SelectableTile)`
  ${(props) =>
    props.compact &&
    css`
      ${fontSize3}
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 5px;
      justify-items: right;
    `}
`;

const JustifyRight = styled.div`
  justify-self: right;
`;

const JustifyLeft = styled.div`
    justify-self: left;
`

function ChangePercentComp({ data }) {
  return (
    <JustifyRight>
      <ChangePercent isPositive={numberFormat(data.CHANGEPCT24HOUR) >= 0}>
        {numberFormat(data.CHANGEPCT24HOUR)}
      </ChangePercent>
    </JustifyRight>
  );
}

function PriceTile({ sym, data }) {
  return (
    <StyledPriceTile>
      <StyledCoinHeadGrid>
        <div>{sym}</div>
        <ChangePercentComp data={data} />
      </StyledCoinHeadGrid>
      <TickerPrice>${numberFormat(data.PRICE)}</TickerPrice>
    </StyledPriceTile>
  );
}

function PriceTileCompact({ sym, data }) {
  return (
    <StyledPriceTile compact>
        <JustifyLeft>{sym}</JustifyLeft>
        <ChangePercentComp data={data} />
      <div>${numberFormat(data.PRICE)}</div>
    </StyledPriceTile>
  );
}

export default function ({ price, index }) {
  let sym = Object.keys(price)[0];
  let data = price[sym]["USD"];
  let TileClass = index < 5 ? PriceTile : PriceTileCompact
  return <TileClass sym={sym} data={data} />;
}
