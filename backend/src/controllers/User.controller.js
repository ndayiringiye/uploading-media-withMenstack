import User from "../models/userModel.js";
import { createUserService, userLogninService } from "../services/userService.js";

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

export const generateUserLogin = async (req, res) => {
    try {
        const formData = req.body;
        const user = await userLogninService(formData);
        res.status(201).json({ success: true, data: user, message: "user login successfully" })
    } catch (error) {
        res.status(500).json({ success: false, message: "invalid credentials" })
    }
}