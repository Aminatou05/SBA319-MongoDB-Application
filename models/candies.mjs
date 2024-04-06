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
const Candy = mongoose.model("candy", candySchema);

export default Candy;
