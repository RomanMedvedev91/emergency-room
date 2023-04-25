import { model, Schema } from 'mongoose';

export interface IPatient {
  id?: String;
  fistName: string;
  LastName: string;
  complainDescription?: string;
  status: 'todo' | 'in_progress' | 'done';
  order: number;
}

export const PatientSchema = new Schema<IPatient>({
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

const PatientModel = model<IPatient>('Patient', PatientSchema);

export default PatientModel;
