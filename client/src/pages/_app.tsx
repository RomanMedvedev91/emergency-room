import '@/styles/globals.css'
import { ApolloClient, ApolloProvider , InMemoryCache, gql } from "@apollo/client";
import type { AppProps } from 'next/app';
import { client } from '../../lib/apolloClient';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
