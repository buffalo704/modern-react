import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import './styles.css';
import App from './app/app';
import {NavigationProvider} from "./context/NavigationContext";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <NavigationProvider>
      <App />
    </NavigationProvider>
  </StrictMode>
);
