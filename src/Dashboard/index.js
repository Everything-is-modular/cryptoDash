import React from "react";
import styled from "styled-components";
import Page from "../Shared/page";
import PriceGrid from "./price-grid";

export default function () {
  return (
    <Page name="dashboard">
      <PriceGrid></PriceGrid>
    </Page>
  );
}
