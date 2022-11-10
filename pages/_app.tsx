import '../styles/globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import type { AppProps } from 'next/app';
import { LoaderProvider } from '../components/common/Loader/LoaderContext';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme } from '../themes';
import { Provider } from 'react-redux';
import { store } from '../store';
import { Middleware } from '../components/common/Middleware';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Middleware>
          <LoaderProvider>
            <Component {...pageProps} />
          </LoaderProvider>
        </Middleware>
      </ThemeProvider>
    </Provider>
  );
}
