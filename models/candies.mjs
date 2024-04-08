import mongoose from "mongoose";

const candySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        unique: true // Ensures that each candy name is unique
    },
    color: String,
    quantity: {
        type: Number,
        required: true,
        min: [5, 'Quantity can not be less than 5.'] // Validation rule
    },
    readyToEat: {
        type: Boolean,
        default: false
    }
});

// Indexes for frequently queried fields
candySchema.index({ name: 1 }); // Index for querying by name
candySchema.index({ color: 1 }); // Index for querying by color


const Candy = mongoose.model("candy", candySchema);

export default Candy;
