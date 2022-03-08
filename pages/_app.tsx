import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../config/store';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ReduxProvider store={store}>
      <Head>
        <title>Kristine S. Lorentzen</title>
        <meta name="description" content="Curriculum Vitae" />
      </Head>
      <Component {...pageProps} />
    </ReduxProvider>
  );
};

export default App;
