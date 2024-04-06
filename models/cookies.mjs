import mongoose from 'mongoose';

const cookieSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true

    },

    color: {
        type: String,
        require: true
    },
    quantity: {
         type: Number, 
         required: true 
        },
    readyToEat: Boolean
});

const Cookie = mongoose.model('Cookie', cookieSchema)

export default Cookie;