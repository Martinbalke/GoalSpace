import mongoose from 'mongoose';
import express from 'express'
import goalrouter from '../routes/goals-routes';
import progressRouter from '../routes/progress-routes';
import cors from 'cors';

require('dotenv').config();

//Middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


//Routes
app.get('/', async (req, res, next) => {
  res.send('Live server')
});

app.use('/goals', goalrouter);
app.use('/progress', progressRouter);

const server = {
  server: app,
  start() {
    const PORT = process.env.PORT || 3045;

    app.listen(PORT, () => {
      console.log(`Server Up on ${PORT}`);
    });

    // Start up DB Server
    const PATH = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/app';
    const options = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false 
    };

    mongoose.connect(PATH, options);
  },
};

export default server.start();
