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

//These indexes will improve the performance of queries that frequently search for data based on these fields.
// Index for querying by name
cookieSchema.index({ name: 1 });

const Cookie = mongoose.model('Cookie', cookieSchema)

export default Cookie;