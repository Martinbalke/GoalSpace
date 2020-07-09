

class Model {
  constructor(schema){
    this.schema = schema;
  }

  create(record){
    let newRecord = new this.schema(record);
    return newRecord.save();
  }

  read(_id){
    if (_id) return this.schema.find({_id});
    else return this.schema.find({});
  }

  update(_id,record){
    return this.schema.findByIdAndUpdate(_id, record, { new: true });
  }

  delete(_id){
    return this.schema.findByIdAndDelete(_id);
  }
}


export default Model;

