import { model, Schema } from 'mongoose';
export const PatientSchema = new Schema({
    id: String,
    fistName: { type: String, required: true },
    LastName: { type: String, required: true },
    complainDescription: { type: String },
    status: {
        type: String,
        enum: ['todo', 'in_progress', 'done'],
        default: 'todo',
        required: true,
    },
    order: { type: Number, required: true },
});
const PatientModel = model('Patient', PatientSchema);
export default PatientModel;
