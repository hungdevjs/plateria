import express from "express";
import * as controller from "../controllers/account.controller.js";

const router = express.Router();

router.post("/logIn", controller.logIn);
router.post("/signUp", controller.signUp);
router.get("/me", controller.getInfo);

export default router;
