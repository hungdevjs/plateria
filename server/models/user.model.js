import mongoose from "mongoose";

import { Socials } from "../utils/constants.js";

const socials = Object.values(Socials);

const Schema = mongoose.Schema;

const schema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  instagram: { type: String, default: "" },
  tiktok: { type: String, default: "" },
  facebook: { type: String, default: "" },
  twitter: { type: String, default: "" },
  activeSocial: { type: String, enum: socials },
  dailyGoal: { type: Number, default: 0 },
  cupVolume: { type: Number, default: 0 },
  reminder: { type: Boolean, default: false },
  music: { type: Boolean, default: false },
  soundEffect: { type: Boolean, default: false },
  gold: { type: Number, default: 0 },
  exp: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  plants: [{ _id: false, type: String }],
  pots: [{ _id: false, type: String }],
  backgrounds: [{ _id: false, type: String }],
  activePlantId: { type: String, required: true },
  activePotId: { type: String, required: true },
  activeBackgroundId: { type: String, required: true },
  createdAt: {
    type: Number,
    required: true,
    default: () => Date.now(),
  },
});

const User = mongoose.model("User", schema);

export default User;
