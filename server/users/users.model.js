import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    index: true,
    unique: true
  },
  email: {
    type: String,
    index: true,
    unique: true
  },
  description: {
    type: String
  }
});

userSchema.statics.findByLogin = async function (login) {
  let user = await this.findOne({
    username: login,
  });

  if (!user) {
    user = await this.findOne({ email: login });
  }

  return user;
};

userSchema.pre('remove', function(next) {
  this.model('Route').deleteMany({ user: this._id }, next);
});

const User = mongoose.model('User', userSchema);

export default User;