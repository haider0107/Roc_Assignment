import express from "express";
import { authMiddleware } from "../middlewares/auth/verifyToken.middleware.js";
import {
  checkToken,
  login,
  registerUser,
} from "../controllers/user.comtroller.js";

const router = express.Router();

// register user
router.route("/register").post(registerUser);

// login user
router.route("/login").post(login);

// check token
router.get("/auth", authMiddleware, checkToken);

export default router;
