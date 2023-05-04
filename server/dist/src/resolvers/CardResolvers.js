// import Client from "../../models/client.js";
// export const resolvers = {
//   Query: {
//     async getClient(_parent, { ID }) {
//       return await Client.findById(ID);
//     },
//     async getClients(_, { }) {
//       return await Client.find();
//     }
//   },
//   Mutation: {
//     async createClient(_parent, { clientInput: { title, description, status, order } }) {
//       const res = await new Client({ title, description, status, order }).save();
//       return res._id;
//     },
//     async updateClient(_, { ID, clientInput: { title, description, status, order } }) {
//       await Client.findByIdAndUpdate({ _id: ID }, { $set: { title, description, status, order } });
//       return ID;
//     },
//     async deleteClient(_, { ID }) {
//       await Client.findByIdAndDelete({ _id: ID });
//       return ID;
//     }
//   }
// };
