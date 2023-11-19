import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from './context/BooksContext';
import App from './app/app';
import './main.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Provider>
    <App />
    </Provider>
  </StrictMode>
);
