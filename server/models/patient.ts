import { model, Schema } from 'mongoose';

export interface IPatient {
  id?: string;
  firstName: string;
  lastName: string;
  complainDescription?: string;
  status: 'todo' | 'in_progress' | 'done';
  order: number;
}

export const PatientSchema = new Schema<IPatient>({
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

const Patient = model<IPatient>('Patient', PatientSchema);
export default Patient;
