import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },  // Added phone field
  address: { type: String, required: true }, // Added address field
});

const User = mongoose.model('User', userSchema);

export default User;
