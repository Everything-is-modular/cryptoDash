import React from "react";
import { AppContext } from "../App/app-provider";

export default function ({name, children}) {
    return (
        <AppContext.Consumer>
            {({page}) => {
                if(!page || page != name) {
                    return null
                } else {
                    return <div>{children}</div>
                }
            }}
        </AppContext.Consumer>
    )
}