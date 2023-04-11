import { model, Schema } from 'mongoose';
const ClientSchema = new Schema({
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
const Client = model('Client', ClientSchema);
export default Client;
