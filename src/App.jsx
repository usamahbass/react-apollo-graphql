import React, { Suspense, lazy } from "react";

import { graphql } from "react-apollo";
import { Header } from "./components/header";
import { Layout } from "./components/layout";
import { Card } from "./components/card";
import { Box } from "./components/box";
import NestedList from "./components/nestedlist";
import gql from "graphql-tag";

const Item = lazy(() => import("./components/item"));

const App = (props) => {
  return (
    <React.Fragment>
      {props.data.user && (
        <div>
          <Header smallAvatar={props.data.user.avatarUrl} />
          <Layout>
            <Card
              avatar={props.data.user.avatarUrl}
              emojistatus={props.data.user.status.emoji}
              messagestatus={props.data.user.status.message}
              name={props.data.user.name}
              nickname={props.data.user.login}
              bio={props.data.user.bio}
              location={props.data.user.location}
              weburl={props.data.user.websiteUrl}
            />

            <Box
              repototal={props.data.user.repositories.totalCount}
              projectstotal={props.data.user.projects.totalCount}
              packagestotal={props.data.user.registryPackages.totalCount}
              starstotal={props.data.user.starredRepositories.totalCount}
              followerstotal={props.data.user.followers.totalCount}
              followingtotal={props.data.user.following.totalCount}
            >
              {props.data.user.repositories.edges.map((repo) => (
                <div>
                  {repo.node.primaryLanguage && (
                    <Suspense fallback={<NestedList />}>
                      <Item
                        reponame={repo.node.name}
                        repodescription={repo.node.description}
                        colorlanguages={{
                          backgroundColor: repo.node.primaryLanguage.color,
                        }}
                        namelanguages={repo.node.primaryLanguage.name}
                        repostars={repo.node.stargazers.totalCount}
                        repopush={repo.node.pushedAt}
                      />
                    </Suspense>
                  )}
                </div>
              ))}
            </Box>
          </Layout>
        </div>
      )}
    </React.Fragment>
  );
};

const queries = gql`
  query(
    $login: String!
    $repo: Int
    $projects: Int
    $packages: Int
    $stars: Int
    $followers: Int
    $following: Int
    $hastars: Int
  ) {
    user(login: $login) {
      name
      login
      avatarUrl
      status {
        emoji
        message
      }
      bio
      location
      websiteUrl
      repositories(first: $repo) {
        totalCount
        edges {
          node {
            name
            description
            primaryLanguage {
              color
              name
            }
            stargazers(last: $hastars) {
              totalCount
            }
            pushedAt
          }
        }
      }
      projects(first: $projects) {
        totalCount
      }
      registryPackages(first: $packages) {
        totalCount
      }
      starredRepositories(first: $stars) {
        totalCount
      }
      followers(first: $followers) {
        totalCount
      }
      following(first: $following) {
        totalCount
      }
    }
  }
`;

export default graphql(queries, {
  options: {
    variables: {
      login: "usamahbass",
      repo: 33,
      projects: 1,
      packages: 1,
      stars: 1,
      followers: 1,
      following: 1,
      hastars: 1,
    },
  },
})(App);
