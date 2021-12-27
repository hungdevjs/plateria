import passwordHash from "password-hash";
import jwt from "jsonwebtoken";

import User from "../models/user.model.js";
import { Errors, Levels } from "../utils/constants.js";
import {
  getDefaultBackground,
  getDefaultPot,
  getDefaultPlant,
  getBackgroundById,
  getPotById,
  getPlantById,
} from "./common.service.js";
import { stringIsEmptyOrWhiteSpace, isFalsy } from "../utils/helpers.js";

export const logIn = async (email, password) => {
  const user = await User.findOne({ email }).lean();
  if (!user) throw new Error(Errors.BadCredential);

  const passed = passwordHash.verify(password, user.password);
  if (!passed) throw new Error(Errors.BadCredential);

  const data = {
    _id: user._id,
    email: user.email,
  };

  const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET_KEY, {
    expiresIn: process.env.JWT_ACCESS_TOKEN_LIFE,
  });

  return { data, accessToken };
};

export const signUp = async (email, name, password) => {
  if (stringIsEmptyOrWhiteSpace([email, name, password]))
    throw new Error(Errors.InvalidInformation);

  const existedUser = await User.findOne({ email }).lean();
  if (!!existedUser) throw new Error(Errors.InvalidInformation);

  const defaultPlant = await getDefaultPlant();
  const defaultPot = await getDefaultPot();
  const defaultBackground = await getDefaultBackground();

  if (isFalsy([defaultPlant, defaultPot, defaultBackground]))
    throw new Error(Errors.MissingInformation);

  const newUser = new User({
    name,
    email,
    password: passwordHash.generate(password),
    plants: [defaultPlant._id],
    pots: [defaultPot._id],
    backgrounds: [defaultBackground._id],
    activePlantId: defaultPlant._id,
    activePotId: defaultPot._id,
    activeBackgroundId: defaultBackground._id,
  });

  await newUser.save();
  return { id: newUser._id };
};

export const getInfo = async (token) => {
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY);
  const userInfo = jwt.decode(token, process.env.ACCESS_TOKEN_SECRET_KEY);

  const user = await User.findOne({ _id: userInfo._id }).lean();
  if (!user) throw new Error("Người dùng không tồn tại");

  return {
    _id: user._id,
    email: user.email,
  };
};

export const getUserPlant = async (userId) => {
  const user = await User.findOne({ _id: userId }).lean();
  if (!user) throw new Error(Errors.BadRequest);

  const {
    _id,
    gold,
    exp,
    level,
    activePlantId,
    activePotId,
    activeBackgroundId,
  } = user;
  const { min, max } = Levels[level];
  const expRate = (exp - min) / (max - min);

  const activePlant = await getPlantById(activePlantId);
  const activePot = await getPotById(activePotId);
  const activeBackground = await getBackgroundById(activeBackgroundId);

  return {
    _id,
    gold,
    expRate,
    activePlant,
    activePot,
    activeBackground,
  };
};
