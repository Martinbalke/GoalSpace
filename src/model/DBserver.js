import mongoose from 'mongoose';


const server = {
  start: () => {
    const PATH = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/app';
    const options = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    };

    mongoose.connect(PATH, options);
  },
};

export default server.start();