import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "../App/app-provider";
import CoinTile from "./coin-tile";

export const StyledDisplayGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-gap: 15px;
  margin-top: 40px;
`;

function getCoinsToDisplay(coinsList, topSection, favorites) {
  return topSection ? favorites : Object.keys(coinsList).slice(0, 100);
}

export default function ({ topSection }) {
  return (
    <AppContext.Consumer>
      {({ coinsList, favorites }) => {
        return (
          <StyledDisplayGrid>
            {getCoinsToDisplay(coinsList, topSection, favorites).map(
              (coinKey) => {
                return <CoinTile topSection={topSection} coinKey={coinKey} />;
              }
            )}
          </StyledDisplayGrid>
        );
      }}
    </AppContext.Consumer>
  );
}

// StyledDisplayGrid component for layout of coin Tiles
// CoinTile component to display tiles
//  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); means that input number of columns depending on where either all columns min with is 250px OR max width is 1fr
// auto-fit gives the remaining space to all the created columns
//auto-fill creates empty columns and fill them when the data is present.
