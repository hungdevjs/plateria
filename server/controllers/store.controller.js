import * as service from "../services/store.service.js";

export const getStore = async (req, res) => {
  try {
    const result = await service.getStore();
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const buy = async (req, res) => {
  try {
    const { userId } = req;
    await service.buy(userId, req.body);
    res.sendStatus(200);
  } catch (err) {
    res.status(400).send(err.message);
  }
};
