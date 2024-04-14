import React from "react";
import { AppContext } from "../App/app-provider";
import styled from "styled-components";

const StyledCenterAligned = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

`

export default function ({ children }) {
  return (
    <AppContext.Consumer>
      {({ coinsList, prices, firstVisit }) => {
        if (!coinsList) {
          return <StyledCenterAligned>Loading Coins</StyledCenterAligned>;
        }
        if (!firstVisit && (!prices || prices.length == 0)) {
          return <StyledCenterAligned>Loading Prices</StyledCenterAligned>;
        }
        return <div>{children}</div>;
      }}
    </AppContext.Consumer>
  );
}
