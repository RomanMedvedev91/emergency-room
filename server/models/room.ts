import { Document, model, Schema } from 'mongoose';
import { IPatient, PatientSchema } from './patient.js';

interface IRoom extends Document {
  title: string;
  patients: IPatient[];
}

const RoomSchema = new Schema<IRoom>({
  title: { type: String, required: true },
  patients: [PatientSchema]
})

const Room = model<IRoom>('Room', RoomSchema);
export default Room;