import React from "react";
import { AppContext } from "../App/app-provider";

export default function ({children}) {
  return (
    <AppContext.Consumer>
      {({ coinsList }) => {
        if (!coinsList) {
          return <div>Loading Coins</div>;
        } else {
            return <div>{children}</div>
        }
      }}
    </AppContext.Consumer>
  );
}
