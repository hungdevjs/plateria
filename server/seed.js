import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import Plant from "./models/plant.model.js";
import Pot from "./models/pot.model.js";
import Background from "./models/background.model.js";

import { PlantTypes, PlantLevels } from "./utils/constants.js";

mongoose.connect(process.env.MONGO_URI, { autoIndex: true, autoCreate: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connected successfully!");
  init();
});

const init = async () => {
  console.log("Init db...");
  const defaultPlant = await Plant.findOne({ isDefault: true }).lean();
  if (!defaultPlant) {
    const plant = new Plant({
      name: "Plant 1",
      image: "",
      type: PlantTypes.Indoor,
      level: PlantLevels.Easy,
      price: 100,
      isDefault: true,
    });

    await plant.save();
  }
  console.log("Init default plant done!");

  const defaultPot = await Pot.findOne({ isDefault: true }).lean();
  if (!defaultPot) {
    const pot = new Pot({
      name: "Pot 1",
      image: "",
      price: 10,
      isDefault: true,
    });

    await pot.save();
  }

  console.log("Init default pot done!");

  const defaultBackground = await Background.findOne({
    isDefault: true,
  }).lean();
  if (!defaultBackground) {
    const background = new Background({
      image: "",
      price: 100,
      isDefault: true,
    });

    await background.save();
  }

  console.log("Init default background done!");
};
