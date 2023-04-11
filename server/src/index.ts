import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { connect } from 'mongoose';
import Book from '../models/book.js';
import Client from '../models/client.js';
import { typeDefs } from './typeDefs.js';
import { resolvers } from './resolvers/CardResolvers.js';

const MONGODB = "mongodb+srv://root:root@cluster0.wbmiybl.mongodb.net/Books?retryWrites=true&w=majority"
const DATABASE_URL = "mongodb+srv://roman:medvedev@cluster0.uxekfkp.mongodb.net/emergencyRoom?retryWrites=true&w=majority"

// const typeDefs = `#graphql
//   type Book {
//     _id: String
//     title: String
//     author: String
//     year: Int
//   }

//   input BookInput {
//     title: String
//     author: String
//     year: Int
//   }

//   type Query { 
//     getBook(ID: ID!): Book!
//     getBooks(limit: Int): [Book]
//   }

//   type Mutation {
//     createBook(bookInput: BookInput): String!
//     updateBook(ID: ID!, bookInput: BookInput): String!
//     deleteBook(ID: ID!): String!
//   }
// `;

// const resolvers = {
//   Query: {
//     async getBook(_, { ID }) {
//       return await Book.findById(ID)
//     },
//     async getBooks(_, { limit }) {
//       return await Book.find().sort({ createdAt: -1 }).limit(limit)
//     }
//   },
//   Mutation: {
//     async createBook(_, { bookInput: {
//       author,
//       title,
//       year
//     } }) {
//       const res = await new Book({
//         author,
//         title,
//         year,
//       }).save();

//       return res._id;
//     },
//     async deleteBook(_, { ID }) {
//       await Book.findByIdAndRemove({ _id: ID });

//       return ID;
//     },
//     async updateBook(_, { ID, bookInput: { author, title, year } }) {
//       await Book.updateOne({ _id: ID }, { $set: { author, title, year } });

//       return ID;
//     },
//   },
// };

await connect(DATABASE_URL);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);