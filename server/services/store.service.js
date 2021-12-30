import User from "../models/user.model.js";
import Plant from "../models/plant.model.js";
import Pot from "../models/pot.model.js";
import Background from "../models/background.model.js";

import { Errors, BuyTypes } from "../utils/constants.js";

export const getStore = async () => {
  const plants = await Plant.find().sort({ price: 1 }).lean();

  const backgrounds = await Background.find().sort({ price: 1 }).lean();

  const pots = await Pot.find().sort({ price: 1 }).lean();

  return { plants, pots, backgrounds };
};

export const buy = async (userId, data) => {
  const user = await User.findOne({ _id: userId });
  if (!user) throw new Error(Errors.BadCredential);

  const { type, _id } = data;

  if (!Object.values(BuyTypes).includes(type))
    throw new Error(Errors.BadRequest);

  if (type === BuyTypes.Plant) {
    if (user.plants.includes(_id))
      throw new Error("You have already bought this plant");

    const plant = await Plant.findOne({ _id }).lean();
    if (!plant) throw new Error(Errors.BadRequest);

    if (plant.minLevel > user.level)
      throw new Error(`User need to reach ${plant.minLevel} to buy this plant`);
    if (plant.price > user.gold) throw new Error("Not enough gold");

    user.plants = [...user.plants, _id];
    user.gold = user.gold - plant.price;

    await user.save();
  }

  if (type === BuyTypes.Pot) {
    if (user.pots.includes(_id))
      throw new Error("You have already bought this pot");

    const pot = await Pot.findOne({ _id }).lean();
    if (!pot) throw new Error(Errors.BadRequest);

    if (pot.minLevel > user.level)
      throw new Error(
        `User need to reach level ${pot.minLevel} to buy this pot`
      );
    if (pot.price > user.gold) throw new Error("Not enough gold");

    user.pots = [...user.pots, _id];
    user.gold = user.gold - pot.price;

    await user.save();
  }

  if (type === BuyTypes.Background) {
    if (user.backgrounds.includes(_id))
      throw new Error("You have already bought this background");

    const background = await Background.findOne({ _id }).lean();
    if (!background) throw new Error(Errors.BadRequest);

    if (background.minLevel > user.level)
      throw new Error(
        `User need to reach ${background.minLevel} to buy this background`
      );
    if (background.price > user.gold) throw new Error("Not enough gold");

    user.backgrounds = [...user.backgrounds, _id];
    user.gold = user.gold - background.price;

    await user.save();
  }
};
