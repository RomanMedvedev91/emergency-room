export const typeDefs = `#graphql

  type Client {
    _id: ID!
    title: String!
    description: String
    status: CardStatus!
    order: Int!
  }

  type Patient {
    _id: ID!
    fistName: String!
    LastName: String!
    complainDescription: String
    status: CardStatus!
    order: Int!
  }

  type Room {
    _id: ID!
    title: String!
    patients: [Patient]
  }

  input ClientInput {
    title: String!
    description: String
    status: CardStatus!
    order: Int!
  }

  input PatientInput {
    fistName: String!
    LastName: String!
    complainDescription: String
    status: CardStatus!
    order: Int!
  }

  enum CardStatus {
    todo
    in_progress
    done
}

  type Query {
    getClient(id: ID!): Client!
    getClients: [Client]
    # getPatient(ID: ID!): Patient!
    # getPatients: [Patient]
    room(id: ID!): Room
    rooms: [Room!]!
  }

  type Mutation {
    createClient(clientInput: ClientInput): String!
    updateClient(id: ID!, clientInput: ClientInput): String!
    deleteClient(id: ID!): String!
    createRoom(title: String!): Room!
    updateRoom(id: ID!, title: String!): Room!
    deleteRoom(id: ID!): ID!
    createPatient(roomId: ID!, patient: PatientInput!): Patient!
    updatePatient(id: ID!, patient: PatientInput): Patient!
    deletePatient(id: ID!): ID!
  }
`;
