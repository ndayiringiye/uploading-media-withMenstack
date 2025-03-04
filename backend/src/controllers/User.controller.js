import User from "../models/userModel.js";
import { createUserService } from "../services/userService.js";

export const createUser = async (req, res) => {
    try {
        const dataForm = req.body;
        const users = await createUserService(dataForm)
        res.status(201).json({ success: true, data: users, message: "user created successfully" })
    } catch (error) {
        console.log(error)
        res.status(401).json({ success: false, message: "invalid credentials" })
    }
};