import React from "react";
import highChartsConfig from "./high-charts-config";
import { Tile } from "../Shared/tile";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { AppContext } from "../App/app-provider";
import HighChartsTheme from './high-charts-theme'
import styled from "styled-components";

Highcharts.setOptions(HighChartsTheme)

const StyledCenter = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    height: 100%;
`


export default function() {
    return(
        <AppContext.Consumer>
            {({historical}) => {
                console.log('historical =>', historical)
                return(
                    <Tile>
                        {historical ? <HighchartsReact highcharts={Highcharts} options={highChartsConfig(historical)} /> : <StyledCenter>Charts Loading</StyledCenter>}
                    </Tile>
                )
            }}
        </AppContext.Consumer>
    )
} 