import { Router } from "express";
import { registeruser , loginUser } from "../Controllers/User.controller.js";

const router = Router();

router.route("/registerUser").post(registeruser);
router.route("/loginUser").post(loginUser);

export default router;                          