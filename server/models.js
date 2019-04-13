import mongoose from 'mongoose';

import User from './users/users.model';
import Route from './route/route.model';


const mongoConfig = {
    //user: process.env.MONGO_INITDB_ROOT_USERNAME || "",
    //pass: process.env.MONGO_INITDB_ROOT_PASSWORD || "",
    reconnectInterval: 500,
    reconnectTries: Number.MAX_VALUE,
    useNewUrlParser: true,
    useCreateIndex: true
  }

  
export const connectDb = () => {
    return mongoose.connect(`${process.env.DB_URL}/${process.env.MONGO_INITDB_DATABASE}`, mongoConfig);
}

export const models = { User, Route };

export const createInfoDB = async () => {
  const user1 = new models.User({
    username: 'rwieruch',
    email: "example@example.com"
  });

  const user2 = new models.User({
    username: 'ddavids',
    email: "admin@admin.com"
  });

  const route1 = new models.Route({
    text: 'Published the Road to learn React',
    user: user1.id,
  });

  const route2 = new models.Route({
    text: 'Happy to release ...',
    user: user2.id,
  });

  const route3 = new models.Route({
    text: 'Published a complete ...',
    user: user2.id,
  });

  await route1.save();
  await route2.save();
  await route3.save();

  await user1.save();
  await user2.save();
};

export const eraseDB = async () => {
  await Promise.all([
    models.User.deleteMany({}),
    models.Route.deleteMany({}),
  ]);
}