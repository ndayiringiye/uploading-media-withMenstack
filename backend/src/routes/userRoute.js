import express from "express"
import { createUser } from "../controllers/User.controller.js";

const route = express.Router();
route.post("/sugnup", createUser);

export default route;