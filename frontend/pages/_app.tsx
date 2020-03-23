import React from 'react';
import { AppContext } from 'next/app';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { defaultLocale } from '../utils/locales';
import { LocaleProvider } from '../context/LocaleContext';
import { RestProvider } from '../context/RestContext';
import Main from '../components/Main';
import Alert from '../components/Alert';
import LoadingOverlay from '../components/LoadingOverlay';
import theme from '../components/theme';

interface MyAppContext extends AppContext {
  pageProps: any;
}

function MyApp({ Component, pageProps }: MyAppContext) {
  const router = useRouter();
  let locale = defaultLocale;
  if (router.query.locale) {
    locale = router.query.locale as string;
  }

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>WirVsVirusHack</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LocaleProvider initialLocale={locale}>
          <RestProvider url="http://ec2-3-127-244-90.eu-central-1.compute.amazonaws.com/api/">
            <LoadingOverlay />
            <Main>
              <Alert />
              <Component {...pageProps} />
            </Main>
          </RestProvider>
        </LocaleProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
