import WelcomeMessage from "./welcome-message";
import ConfirmButton from "./confirm-button";
import Page from "../Shared/page";
import CoinGrid from "./coin-grid";

export default function () {
  return (
    <Page name={"settings"}>
      <WelcomeMessage />
      <CoinGrid topSection />
      <ConfirmButton />
      <CoinGrid />
    </Page>
  );
}

// Page component with uses context consumer to check whether the page is equal to name if ! then do not show children
// WelcomeMessage checks firstVisit in contextProvider if true then show welcome Text

// We added a component to check whether the children to be displayed depending on Name
// We added a component to show welcome message
// We added a coinGrid component which display grid of coin tiles
// We added a confirm Button component which display grid of coin tiles