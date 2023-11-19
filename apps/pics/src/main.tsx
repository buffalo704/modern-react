import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { searchImages } from "./api";
import App from './app/app';

console.log(searchImages('cars'));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
