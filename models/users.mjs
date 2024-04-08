import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        index: true, // Index for querying by email
      },
      age: {
        type: Number,
        required: true,
        min: 10,
      },
});

const User = mongoose.model('User', userSchema);

export default User;