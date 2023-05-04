import { model, Schema } from 'mongoose';
export const PatientSchema = new Schema({
    id: String,
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    complainDescription: { type: String },
    status: {
        type: String,
        enum: ['todo', 'in_progress', 'done'],
        default: 'todo',
        required: true,
    },
    order: { type: Number, required: true },
});
const Patient = model('Patient', PatientSchema);
export default Patient;
