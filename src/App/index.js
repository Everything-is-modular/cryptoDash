import "./App.css";
import Settings from "../settings";
import styled, { css } from "styled-components";
import AppLayout from "./app-layout";
import AppBar from "./app-bar";
import { AppProvider } from "./app-provider";

function App() {
  // TODO TAHS
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <Settings />
      </AppProvider>
    </AppLayout>
  );
}

export default App;
