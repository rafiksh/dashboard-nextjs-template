import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Dashboard from "~/layout/Dashboard";
import Head from "next/head";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Market POS</title>
        <meta name="description" content="Market POS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard>
        <Component {...pageProps} />
      </Dashboard>
    </>
  );
};

export default api.withTRPC(MyApp);
