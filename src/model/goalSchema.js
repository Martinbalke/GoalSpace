import mongoose from 'mongoose';
import progressSchema from './progressSchema';
const Schema = mongoose.Schema;

const goalSchema = new Schema({
  goal: {type: String, required: true},
  milestone: {type: String},
  habits: {type: Array, required: true},
})


goalSchema.pre('findOneAndDelete', () => {
  console.log('here')
  // progressSchema.remove({goal: this._id})

})


const goal = mongoose.model('goals', goalSchema);

export default goal;