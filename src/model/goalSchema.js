import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const goalSchema = new Schema({
  goal: {type: String, required: true},
  milestone: {type: String},
  habits: {type: Array, required: true},
})
const goal = mongoose.model('goals', goalSchema);

export default goal;