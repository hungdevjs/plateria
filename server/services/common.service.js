import Plant from "../models/plant.model.js";
import Pot from "../models/pot.model.js";
import Background from "../models/background.model.js";

export const getDefaultPlant = async () => {
  const plant = await Plant.findOne({ isDefault: true }).lean();
  return plant || null;
};

export const getDefaultPot = async () => {
  const pot = await Pot.findOne({ isDefault: true }).lean();
  return pot || null;
};

export const getDefaultBackground = async () => {
  const background = await Background.findOne({ isDefault: true }).lean();
  return background || null;
};

export const getPlantById = async (_id) => {
  const plant = await Plant.findOne({ _id }).lean();
  return plant || null;
};

export const getPotById = async (_id) => {
  const pot = await Pot.findOne({ _id }).lean();
  return pot || null;
};

export const getBackgroundById = async (_id) => {
  const background = await Background.findOne({ _id }).lean();
  return background || null;
};
