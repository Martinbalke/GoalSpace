import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const progressSchema = new Schema({
  dailyProgress:{type: Object, required: true},
  monthlyProgress: { type: Object, required: true },
  associatedGoal: {type: Schema.Types.ObjectId, ref: 'goals', required: true}
})


progressSchema.pre('find', function (next) {
  this.populate('associatedGoal');
  next();
});


const progress = mongoose.model('progress', progressSchema);
export default progress;