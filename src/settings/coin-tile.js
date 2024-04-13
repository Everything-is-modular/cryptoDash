import React from "react";
import { AppContext } from "../App/app-provider";
import { SelectableTile, DeletableTile, DisabledTile } from "../Shared/tile";
import CoinHeaderGrid from "./coin-header-grid";
import CoinImage from "../Shared/coin-image";

function clickCoinHandler(topSection, coinKey, addCoin, removeCoin) {
  return topSection
    ? () => {
        removeCoin(coinKey);
      }
    : () => {
        addCoin(coinKey);
      };
}

export default function ({ coinKey, topSection }) {
  let TileClass = SelectableTile;
  return (
    <AppContext.Consumer>
      {({ coinsList, addCoin, removeCoin, isInFavorites }) => {
        if (topSection) {
          TileClass = DeletableTile;
        } else if (isInFavorites(coinKey)) {
          TileClass = DisabledTile;
        }
        let coin = coinsList[coinKey];
        let coinName = coin["CoinName"];
        let coinSymbol = coin["Symbol"];
        return (
          <TileClass
            onClick={clickCoinHandler(topSection, coinKey, addCoin, removeCoin)}
          >
            <CoinHeaderGrid
              topSection={topSection}
              name={coinName}
              symbol={coinSymbol}
            />
            <CoinImage coin={coin} />
          </TileClass>
        );
      }}
    </AppContext.Consumer>
  );
}
// different styled Tiles shown
// added a component only for header which has two items => name and symbol/delete icon
// CoinImage component which return a img tag with alt src style filled
