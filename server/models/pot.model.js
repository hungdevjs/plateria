import mongoose from "mongoose";

const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    default: 0,
  },
  minLevel: { type: Number, default: 1 },
  isDefault: { type: Boolean, default: false },
  createdAt: {
    type: Number,
    required: true,
    default: () => Date.now(),
  },
});

const Pot = mongoose.model("Pot", schema);

export default Pot;
