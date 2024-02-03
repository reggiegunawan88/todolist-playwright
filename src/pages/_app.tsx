import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@/styles/global.css';
import { Provider } from 'react-redux';
import { store, persistor } from '@/store';
import { AppConfig } from '@/utils/AppConfig';
import { PersistGate } from 'redux-persist/integration/react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page: any) => page);

  return (
    <>
      <Head>
        <title>{AppConfig.title}</title>
        <meta name="description" content={AppConfig.description} />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:type" content="website" />
        <meta charSet="UTF-8" key="charset" />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5" />
      </Head>
      {getLayout(
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>,
      )}
      ;
    </>
  );
};

export default MyApp;
