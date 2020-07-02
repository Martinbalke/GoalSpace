import Model from './Model';
import goalSchema from './goalSchema';

class GoalModel extends Model {
  constructor(){
    super(goalSchema)
  }
}

export default GoalModel;