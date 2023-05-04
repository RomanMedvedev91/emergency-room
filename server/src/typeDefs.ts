export const typeDefs = `#graphql
  enum CardStatus {
    todo
    in_progress
    done
}

  type Patient {
    _id: ID!
    firstName: String!
    lastName: String!
    complainDescription: String
    status: CardStatus!
    order: Int!
  }

  type Room {
    _id: ID!
    title: String!
    patients: [Patient]
  }

  input PatientInput {
    firstName: String!
    lastName: String!
    complainDescription: String
    status: CardStatus!
    order: Int!
  }

  type Query {
    getPatient(id: ID!): Patient!
    getPatients: [Patient!]!
    room(id: ID!): Room
    rooms: [Room!]!
  }

  type Mutation {
    createRoom(title: String!): Room!
    updateRoom(id: ID!, title: String!): Room!
    deleteRoom(id: ID!): ID!
    createPatient(roomId: ID!, patient: PatientInput!): Patient!
    updatePatient(id: ID!, patient: PatientInput): Patient!
    deletePatient(id: ID!): ID!
  }
`;
