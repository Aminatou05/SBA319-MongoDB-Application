import mongoose from "mongoose";

const candySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  color: {
    type: String,
    require: true,
  },
  quantity: {
     type: Number, 
     required: true
     },
  readyToEat: Boolean,
});

// Indexes for frequently queried fields
candySchema.index({ name: 1 }); // Index for querying by name
candySchema.index({ color: 1 }); // Index for querying by color
const Candy = mongoose.model("candy", candySchema);

export default Candy;
