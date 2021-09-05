import type { AppProps } from 'next/app';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import MainLayout from 'src/layouts/main';
import 'react-toastify/dist/ReactToastify.css';
import './../styles/globals.css';
import './../styles/tailwind.css';
import { Provider } from 'react-redux';
import { store } from 'src/stores';
import { ThemeProvider } from '@material-ui/core';
import { theme } from '@/config/mui';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

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
