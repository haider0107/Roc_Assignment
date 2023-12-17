import express from "express";
import { authMiddleware } from "../middlewares/auth/verifyToken.middleware.js";

const router = express.Router();

// register user
router.route("/register").post();

// login user
router.route("/login").post();

// check token
router.get("/auth", authMiddleware);

export default router;
