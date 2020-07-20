import mongoose from 'mongoose';


import progressSchema from './progressSchema';



const Schema = mongoose.Schema;
const goalSchema = new Schema({
  goal: {type: String, required: true},
  milestone: {type: String},
  habits: {type: Array, required: true},
})


goalSchema.post('findOneAndDelete', async function (goal) {
 let result = await progressSchema.deleteOne({goal: goal._id})
 console.log(result);
})


const goal = mongoose.model('goals', goalSchema);

export default goal;