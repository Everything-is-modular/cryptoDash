import './App.css';
import WelcomeMessage from './welcome-message'
import styled, {css} from 'styled-components'
import AppLayout from './app-layout';

function App() {
  // TODO TAHS
  return (
    <AppLayout>
      <WelcomeMessage />
    </AppLayout>
  );
}

export default App;
