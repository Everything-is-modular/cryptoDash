import WelcomeMessage from "./welcome-message";
import ConfirmButton from "./confirm-button";
import Page from "../Shared/page";
import CoinGrid from "./coin-grid";

export default function() {
    return (
        <Page name={'settings'}>
        <WelcomeMessage />
        <ConfirmButton />
        <CoinGrid />
        </Page>
    )
}