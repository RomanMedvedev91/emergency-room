// import Patient from "../../models/patient.js";
import PatientModel from "../../models/patient.js";
import RoomModel from "../../models/room.js";

export const resolvers = {
  Query: {
        async getPatient(_parent, { ID }) {
      return await PatientModel.findById(ID);
    },
    async getPatients(_, { }) {
      return await PatientModel.find();
    },
    async room(_, { ID }) {
      const room = await RoomModel.findById(ID);
      return room;
    },
    async rooms() {
      const rooms = await RoomModel.find();
      return rooms;
    }
  },
  Mutation: {
    async createRoom(_, { title }) {
      const res = await new RoomModel({ title }).save();
      return res._id;
    },
    async updateRoom(_, { ID, title }) {
      const res = await RoomModel.findByIdAndUpdate(ID, { title }, { new: true });
      return res;
    },
    async deleteRoom(_, { ID }) {
      const res = await RoomModel.findByIdAndDelete(ID);
      return res._id;
    },
    async createPatient(_parent, { roomId, firstName, lastName, complainDescription, status, order }) {
      const patient = await new PatientModel({ firstName, lastName, complainDescription, status, order }).save();
      const room = await RoomModel.findById(roomId);
      room.patients.push(patient);
      await room.save();
      return patient;
    },
    async updatePatient(_, { ID, firstName, lastName, complainDescription, status, order }) {
      const patient = await PatientModel.findByIdAndUpdate(ID, { firstName, lastName, complainDescription, status, order }, { new: true });
      return patient._id;
    },
    async deletePatient(_, { ID }) {
      const patient = await PatientModel.findByIdAndDelete(ID);
      return patient._id;
    }
  },
  // Room: {
  //   async patients(room) {
  //     const populatedRoom = await room.populate('patients').execPopulate();
  //     return populatedRoom.patients;
  //   }
  // }
};