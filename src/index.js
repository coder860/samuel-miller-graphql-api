const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const typeDefs = gql`
  type Query {
    name: String
    country: String
    ppsize: String
    face: String
    crush: String
  }
`;
const resolvers = {
  Query: {
    name: () => "Samuel Miller",
    country: () => "Venezuela",
    ppsize: () => "smol",
    face: () => "sexy face",
    crush: () => "Lana Rhoades"
  }
};
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers
});
server.applyMiddleware({ app });
app.use((req, res) => {
  res.status(200);
  res.redirect("/graphql");
  res.end();
});
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
