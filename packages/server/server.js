const { ApolloServer } = require("apollo-server");
const typeDefs = require("./type-defs");
const resolvers = require("./resolvers");

const server = new ApolloServer({ cors: true, typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen({ port: 8082 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
