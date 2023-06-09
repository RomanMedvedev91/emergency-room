import '@/styles/globals.css';
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from 'next/app';
import { client } from '../../lib/apolloClient';
import { Layout } from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
