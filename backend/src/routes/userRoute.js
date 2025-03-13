import express from "express"
import { createUser, generateUserLogin } from "../controllers/User.controller.js";

const route = express.Router();
route.post("/signup", createUser);
route.post("/login", generateUserLogin)

export default route;