import env from 'dotenv';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { connect } from 'mongoose';
import { typeDefs } from './typeDefs.js';
import { resolvers } from './resolvers/CardResolvers.js';
env.config();
await connect(`${process.env.MONGO_URI}`);
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
