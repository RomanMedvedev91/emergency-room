import { model, Schema } from 'mongoose';

interface IClient {
  id?: String;
  title: string;
  description?: string;
  status: 'todo' | 'in_progress' | 'done';
  order: number;
}

const ClientSchema = new Schema<IClient>({
  id: String,
  title: { type: String, required: true },
  description: { type: String },
  status: {
    type: String,
    enum: ['todo', 'in_progress', 'done'],
    default: 'todo',
    required: true,
  },
  order: { type: Number, required: true },
});

const Client = model<IClient>('Client', ClientSchema);

export default Client;
