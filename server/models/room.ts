import { Document, model, Schema } from 'mongoose';
import { IPatient, PatientSchema } from './patient';

interface IRoom extends Document {
  title: string;
  patients: IPatient[];
}

const RoomSchema = new Schema<IRoom>({
  title: { type: String, required: true },
  patients: [PatientSchema]
})

const RoomModel = model<IRoom>('Room', RoomSchema);
export default RoomModel;