import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const progressSchema = new Schema({
  dailyProgress:{type: Array, required: true},
  monthlyProgress: { type: Array, required: true },
  goal: {type: Schema.Types.ObjectId, ref: 'goals', required: true}
})


progressSchema.pre('find', function (next) {
  this.populate('goal');
  next();
});


const progress = mongoose.model('progress', progressSchema);
export default progress;