import express from "express";
import * as controller from "../controllers/store.controller.js";
import auth from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", auth, controller.getStore);
router.post("/", auth, controller.buy);

export default router;
