import "./App.css";
import Settings from "../settings";
import AppLayout from "./app-layout";
import AppBar from "./app-bar";
import { AppProvider } from "./app-provider";
import ContentLoading from "../Shared/content";

function App() {
  // TODO TAHS
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <ContentLoading>
          <Settings />
        </ContentLoading>
      </AppProvider>
    </AppLayout>
  );
}

export default App;

// AppLayout returning Styled Component with padding 40px
// AppProvider class Component which fetches all the coins and which is a context provider and provides it's state to the consumer
// ContentLoading with context consumer it checks if coinsList is present then it displays it's children which is settings page otherwise it displays nothing
