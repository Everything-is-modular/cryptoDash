import './App.css';
import WelcomeMessage from './welcome-message'
import styled, {css} from 'styled-components'
import AppLayout from './app-layout';
import AppBar from './app-bar';

function App() {
  // TODO TAHS
  return (
    <AppLayout>
      <AppBar />
      <WelcomeMessage />
    </AppLayout>
  );
}

export default App;
