import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client'
import fetch from 'isomorphic-fetch'
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphqlErrors, networkError}) => {
  if(graphqlErrors) {
    graphqlErrors.map(({message, location, path}) => {
      alert(`Graphql erno ${message}`);
    })
  }
}) 
const link = new HttpLink({
  uri: process.env.REACT_APP_BACKENDURL,
  fetch,
  errorLink
})

export default new ApolloClient({
  link,
  cache: new InMemoryCache(),
  ssrMode: true
})
