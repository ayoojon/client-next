import type { AppProps } from 'next/app';
import React from 'react';
import { Router } from 'next/router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import MainLayout from 'src/layouts/main';
import { Provider } from 'react-redux';
import { store } from 'src/stores';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/config/mui';
import NextNprogress from 'nextjs-progressbar';
import 'react-toastify/dist/ReactToastify.css';
import 'react-dates/lib/css/_datepicker.css';
import './../styles/globals.css';
import './../styles/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <MainLayout>
            <NextNprogress color="#005059" startPosition={0.1} stopDelayMs={200} height={3} showOnShallow={false} />
            <Component {...pageProps} />
          </MainLayout>
          {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
        </QueryClientProvider>
      </ThemeProvider>
    </Provider>
  );
}
export default MyApp;
