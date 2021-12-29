import express from "express";
import * as controller from "../controllers/account.controller.js";
import auth from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/logIn", controller.logIn);
router.post("/signUp", controller.signUp);
router.get("/me", controller.getInfo);
router.get("/me/plant", auth, controller.getUserPlant);
router.post("/drink", auth, controller.drinkWater);

export default router;
