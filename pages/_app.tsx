import '../styles/globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import type { AppProps } from 'next/app';
import { LoaderProvider } from '../components/common/Loader/LoaderContext';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme } from '../themes';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <LoaderProvider>
        <Component {...pageProps} />
      </LoaderProvider>
    </ThemeProvider>
  );
}
