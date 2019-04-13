import mongoose from 'mongoose';

const routeSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Route = mongoose.model('Route', routeSchema);

export default Route;