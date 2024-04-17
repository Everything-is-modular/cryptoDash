import React from "react";
import highChartsConfig from "./high-charts-config";
import { Tile } from "../Shared/tile";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { AppContext } from "../App/app-provider";
import HighChartsTheme from './high-charts-theme'

Highcharts.setOptions(HighChartsTheme)


export default function() {
    return(
        <AppContext.Consumer>
            {({}) => {
                return(
                    <Tile>
                        <HighchartsReact highcharts={Highcharts} options={highChartsConfig()} />
                    </Tile>
                )
            }}
        </AppContext.Consumer>
    )
} 