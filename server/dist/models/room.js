import { model, Schema } from 'mongoose';
import { PatientSchema } from './patient.js';
const RoomSchema = new Schema({
    title: { type: String, required: true },
    patients: [PatientSchema]
});
const RoomModel = model('Room', RoomSchema);
export default RoomModel;
