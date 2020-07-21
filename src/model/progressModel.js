import Model from './Model';
import schema from './progressSchema';


class ProgressModel extends Model {
  constructor() {
    super(schema)
  }

  async findByGoal(goalID){
    let data = await schema.find({associatedGoal: goalID})
    return data;
  }
}


export default ProgressModel;