import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { connectToDatabase } from './configs/db.js';
import router from './routes/index.js';

const app = express();
const PORT = 8000;

const whitelist = ['http://localhost:3000'];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
// connect to database
connectToDatabase();
//middleware
app.use(express.json());
app.use(cors('*'));
//routing
app.use('/trip', router);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
