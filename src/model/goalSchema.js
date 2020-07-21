import mongoose from 'mongoose';


import progressSchema from './progressSchema';



const Schema = mongoose.Schema;
const goalSchema = new Schema({
  goal: {type: String, required: true},
  milestone: {type: String},
  habits: {type: Array, required: true},
})


goalSchema.post('findOneAndDelete', async function (goal) {
  await progressSchema.deleteOne({associatedGoal: goal._id})
})


const goal = mongoose.model('goals', goalSchema);

export default goal;