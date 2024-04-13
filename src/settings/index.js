import WelcomeMessage from "./welcome-message";
import ConfirmButton from "./confirm-button";
import Page from "../Shared/page";
export default function() {
    return (
        <Page name={'settings'}>
        <WelcomeMessage />
        <ConfirmButton />
        </Page>
    )
}