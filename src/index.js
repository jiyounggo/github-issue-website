import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global-styles';
import App from './App';
import { ApiProvider } from './context/Api';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
      <ApiProvider>
        <App />
      </ApiProvider>
    </BrowserRouter>
  </ThemeProvider>
);
