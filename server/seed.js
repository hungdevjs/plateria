import mongoose from "mongoose";
import dotenv from "dotenv";
import _ from "lodash";
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

const indexes = [1, 2, 3, 4, 5, 6, 7, 8];

const init = async () => {
  console.log("Init db...");
  console.log("Init plants...");
  const defaultPlant = await Plant.findOne({ isDefault: true }).lean();
  if (!defaultPlant) {
    const plant = new Plant({
      name: "Plant",
      image: "Plant.png",
      type: PlantTypes.Indoor,
      level: PlantLevels.Easy,
      price: 100,
      isDefault: true,
    });

    await plant.save();
  }

  for (const index of indexes) {
    const plant = await Plant.findOne({ image: `Plant${index}.png` }).lean();
    if (!plant) {
      const newPlant = new Plant({
        name: `Plant ${index}`,
        image: `Plant${index}.png`,
        type: _.sample([PlantTypes.Indoor, Plant.Outdoor]),
        level: _.sample([
          PlantLevels.Easy,
          PlantLevels.Medium,
          PlantLevels.Hard,
        ]),
        price: 100 * (index + 1),
      });

      await newPlant.save();
    }
  }

  console.log("Init plants done!");

  console.log("Init pots...");
  const defaultPot = await Pot.findOne({ isDefault: true }).lean();
  if (!defaultPot) {
    const pot = new Pot({
      name: "Pot",
      image: "Pot.png",
      price: 10,
      isDefault: true,
    });

    await pot.save();
  }

  for (const index of indexes) {
    const pot = await Pot.findOne({ image: `Pot${index}.png` }).lean();
    if (!pot) {
      const newPot = new Pot({
        name: `Pot ${index}`,
        image: `Pot${index}.png`,
        price: 10 * (index + 1),
      });

      await newPot.save();
    }
  }

  console.log("Init pots done!");

  console.log("Init backgrounds...");
  const defaultBackground = await Background.findOne({
    isDefault: true,
  }).lean();
  if (!defaultBackground) {
    const background = new Background({
      image: "Background.png",
      price: 100,
      isDefault: true,
    });

    await background.save();
  }

  for (const index of indexes) {
    const background = await Background.findOne({
      image: `Background${index}.png`,
    }).lean();
    if (!background) {
      const newBackground = new Background({
        image: `Background${index}.png`,
        price: 100 * (index + 1),
      });

      await newBackground.save();
    }
  }

  console.log("Init backgrounds done!");
};
