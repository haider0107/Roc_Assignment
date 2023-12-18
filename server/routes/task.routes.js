import express from "express";
import authMiddleware from "../middlewares/auth/verifyToken.middleware.js";
import { addTask, editTask, getTasks } from "../controllers/task.controller.js";

const router = express.Router();

// add task and get all task
router.route("/").post(authMiddleware, addTask).get(authMiddleware, getTasks);

// edit task
router.route("/edit/:task_id").post(authMiddleware, editTask);

export default router;
