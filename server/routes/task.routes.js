import express from "express";
import { authMiddleware } from "../middlewares/auth/verifyToken.middleware.js";

const router = express.Router();

// add task and get all task
router.route("/").post(authMiddleware).get(authMiddleware);

// edit task
router.route("/edit").post(authMiddleware)

export default router;
