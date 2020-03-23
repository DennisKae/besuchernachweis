import * as React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { detectLocale } from '../utils/locales';
import redirectTo from '../utils/redirectTo';

const Index: NextPage = () => (
  <Head>
    <meta name="robots" content="noindex, nofollow" />
  </Head>
);

Index.getInitialProps = async ctx => {
  const locale = detectLocale(ctx.req);
  redirectTo(`/${locale}/visitor/register`, 302, ctx.res);
  return {};
};

export default Index;
