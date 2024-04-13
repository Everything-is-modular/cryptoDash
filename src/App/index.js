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
