export const typeDefs = `#graphql

  type Client {
    _id: ID!
    title: String!
    description: String
    status: CardStatus!
    order: Int!
  }

  input ClientInput {
    title: String!
    description: String
    status: CardStatus!
    order: Int!
  }

  enum CardStatus {
    todo
    in_progress
    done
}

  type Query {
    getClient(ID: ID!): Client!
    getClients: [Client]
  }

  type Mutation {
    createClient(clientInput: ClientInput): String!
    updateClient(ID: ID!, clientInput: ClientInput): String!
    deleteClient(ID: ID!): String!
  }
`;
