import mongoose from 'mongoose';

const goalSchema = new mongoose.Schema({
  goal: {type: String, required: true},
  milestone: String,
  habits: {type: Array, required: true},
})


export default mongoose.model('goals', goalSchema);