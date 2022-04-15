import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import App from './App';

// jjw: https://stackoverflow.com/a/71808238 need to use
// - '!' (non-null assertion) https://stackoverflow.com/a/42274019
// OR - 'as Element'
ReactDOM.createRoot(document.querySelector('#root') as Element).render(
  <StyledEngineProvider injectFirst>
    <App />
  </StyledEngineProvider>
);
