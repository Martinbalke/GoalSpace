import Model from './Model';
import schema from './goalSchema';


class GoalModel extends Model {
  constructor(){
    super(schema)
  }
}


export default GoalModel;