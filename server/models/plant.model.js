import mongoose from "mongoose";

import { PlantTypes, PlantLevels } from "../utils/constants.js";

const plantTypes = Object.values(PlantTypes);
const plantLevels = Object.values(PlantLevels);

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
  type: {
    type: String,
    enum: plantTypes,
  },
  level: {
    type: String,
    enum: plantLevels,
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

const Plant = mongoose.model("Plant", schema);

export default Plant;
