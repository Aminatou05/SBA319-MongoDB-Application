import mongoose, { mongo } from "mongoose";

const userSchema = new mangoose.Schema({
    username:
     { type: String, 
        required: true 
    },
    email: { 
        type: String,
         required: true 
        },
    password: { 
        type: String,
         required: true 
        },
});

const User = mongoose.model('User', userSchema);

export default User;