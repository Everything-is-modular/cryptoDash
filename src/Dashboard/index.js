import React from "react";
import styled from "styled-components";
import Page from "../Shared/page";
import PriceGrid from "./price-grid";
import CoinSpotlight from "./coin-spotlight";
import PriceChart from "./price-chart";

const ChartGrid = styled.div`
  display: grid;
  margin-top: 20px;
  grid-gap: 15px;
  grid-template-columns: 1fr 3fr;
`


export default function () {
  return (
    <Page name="dashboard">
      <PriceGrid />
      <ChartGrid>
      <CoinSpotlight />
      <PriceChart />
      </ChartGrid>
    </Page>
  );
}
