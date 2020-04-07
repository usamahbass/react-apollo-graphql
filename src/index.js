import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-client-preset";
import { ApolloProvider } from "react-apollo";
import { Routes } from "./routes";
import "./sass/main.scss";

const githubToken = "e9a488123786b1b48b5b796f70c30b7b228bdb00";

const graphqlClient = new ApolloClient({
  link: new HttpLink({
    uri: `https://api.github.com/graphql`,
    headers: {
      Authorization: `Bearer ${githubToken}`,
    },
  }),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={graphqlClient}>
    <Routes />
  </ApolloProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
