import Head from "next/head";
import { AppContext } from "next/app";
import { END } from "redux-saga";
import { useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { wrapper, SagaStore } from "services/store";
import { theme } from "theme";

const AppCoreComponent = ({ Component, pageProps }) => {
  useEffect(() => {
    // Styling solution with CSSinJS with SSR
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Test task</title>

        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

const getInitialProps = async ({ Component, ctx }: AppContext) => {
  const pageProps = {
    ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
  };

  if (ctx.req) {
    ctx.store.dispatch(END);

    // Supporting redux-saga SSR  
    const sagaTask = (ctx.store as SagaStore)?.sagaTask;
    if (sagaTask) {
      await sagaTask.toPromise();
    }
  }

  return { pageProps };
};

AppCoreComponent.getInitialProps = getInitialProps;

export default wrapper.withRedux(AppCoreComponent);
