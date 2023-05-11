import Patient from "../../models/patient.js";
import Room from "../../models/room.js";

export const resolvers = {
  Query: {
        async getPatient(_parent, { id }) {
      return await Patient.findById(id);
    },
    async getPatients(_, { }) {
      return await Patient.find();
    },
    async room(_, { id }) {
      const room = await Room.findById(id);
      return room;
    },
    async rooms() {
      const rooms = await Room.find();
      return rooms;
    }
  },
  Mutation: {
    async createRoom(_, { title }) {
      const res = await new Room({ title }).save();
      return res;
    },
    async updateRoom(_, { id, title }) {
      const res = await Room.findByIdAndUpdate(id, { title }, { new: true });
      return res;
    },
    async deleteRoom(_, { id }) {
      const res = await Room.findByIdAndDelete(id);
      return res._id;
    },
    async createPatient(_parent, { roomId, patient }) {
      const { firstName, lastName, complainDescription, status, order } = patient;
      const newPatient = new Patient({ firstName, lastName, complainDescription, status, order });

      try {
        await newPatient.save();
    
        if (roomId) {
          const room = await Room.findById(roomId);
          room.patients.push(newPatient);
          await room.save();
        }
    
        return newPatient;
      } catch (error) {
        console.log(error);
        throw new Error('Could not create patient.');
      }
    },
    async updatePatient(_, { id, patient }) {
      const { firstName, lastName, complainDescription, status, order } = patient;
      const updatedPatient = await Patient.findByIdAndUpdate(id, { firstName, lastName, complainDescription, status, order }, { new: true });
      return updatedPatient;
    },

    async deletePatient(_, { id }) {
      const patient = await Patient.findByIdAndDelete(id);
      return patient._id;
    }
  },
};