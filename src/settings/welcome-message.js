import React from "react"
import { AppContext } from "../App/app-provider"

export default function WelcomeMessage() {
    return(
        <AppContext.Consumer>
            {({firstVisit}) => {
                if(firstVisit) {
                    return (
                        <div>
                            Welcome to CryptoDash, please select your favorite coins to begin.
                        </div>
                    )
                } else {
                    return null
                }
            }}
        </AppContext.Consumer>
    )
}