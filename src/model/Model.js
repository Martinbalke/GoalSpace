

class Model {
  constructor(schema){
    this.schema = schema;
  }

  create(record){
    let newRecord = new this.schema(record);
    return newRecord.save();
  }

  read(query){
    //QUERY MUST BE AN OBJECT
    if (query) return this.schema.find(query);
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

