import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './routes/router';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ThemeProvider } from '@mui/material/styles';
import theme from './globalStyles';
import { CssBaseline } from '@mui/material';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline />
          <AppRouter />
        </Provider>
      </ThemeProvider>
    </React.StrictMode>,
  );
}
