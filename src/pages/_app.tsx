import type { AppProps } from 'next/app';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import MainLayout from 'src/layouts/main';
import { Provider } from 'react-redux';
import { store } from 'src/stores';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/config/mui';
import 'react-toastify/dist/ReactToastify.css';
import 'react-dates/lib/css/_datepicker.css';
import './../styles/globals.css';
import './../styles/tailwind.css';
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';
import { Router } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  Router.events.on('routeChangeStart', () => NProgress.start());
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
          {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
        </QueryClientProvider>
      </ThemeProvider>
    </Provider>
  );
}
export default MyApp;
