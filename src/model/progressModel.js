import Model from './Model';
import schema from './progressSchema';


class ProgressModel extends Model {
  constructor() {
    super(schema)
  }

  //Whenever we delete a goal // delete associated progress data
  async findByGoal(goalID){ 
    let data = await schema.find({associatedGoal: goalID}) 
    return data;
  }
}


export default ProgressModel;