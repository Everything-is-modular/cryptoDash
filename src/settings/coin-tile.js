import React from "react";
import { AppContext } from "../App/app-provider";
import { SelectableTile, DeletableTile } from "../Shared/tile";
import CoinHeaderGrid from "./coin-header-grid";
import CoinImage from "../Shared/coin-image";

export default function ({coinKey, topSection}) {
    let TileClass = SelectableTile
    if(topSection) {
        TileClass = DeletableTile
    }
    return (
        <AppContext.Consumer>
            {({coinsList}) => {
                let coin = coinsList[coinKey]
                let coinName= coin['CoinName']
                let coinSymbol= coin['Symbol']
                return(
                    <TileClass>
                        <CoinHeaderGrid topSection={topSection} name={coinName} symbol={coinSymbol} />
                        <CoinImage coin={coin} />
                    </TileClass>
                )
            }}
        </AppContext.Consumer>
    )
}