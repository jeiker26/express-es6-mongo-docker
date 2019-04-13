import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routesUsers from './users/users.route';
import { connectDb, createInfoDB, eraseDB, models } from "./models";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(async (req, res, next) => {
  req.context = {
    models
  };
  next();
});

/** Routes */
app.use('/users', routesUsers);


connectDb().then(async () => { 
  // eraseDB();
  // createInfoDB();
  
  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
  );
});

