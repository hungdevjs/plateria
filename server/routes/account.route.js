import express from "express";
import * as controller from "../controllers/account.controller.js";
import auth from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/logIn", controller.logIn);
router.post("/signUp", controller.signUp);
router.get("/me", controller.getInfo);
router.get("/me/plant", auth, controller.getUserPlant);
router.post("/drink", auth, controller.drinkWater);
router.get("/me/settings", auth, controller.getSettings);
router.post("/me/settings", auth, controller.updateSettings);
router.get("/me/gold", auth, controller.getUserGold);
router.get("/me/stuffs", auth, controller.getUserStuffs);
router.post("/me/stuffs", auth, controller.updateUserStuffs);

export default router;
