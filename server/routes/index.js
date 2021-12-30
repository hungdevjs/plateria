import express from "express";

import accountRoute from "./account.route.js";
import storeRoute from "./store.route.js";

const router = express.Router();

router.use("/v1/account", accountRoute);
router.use("/v1/store", storeRoute);

export default router;
