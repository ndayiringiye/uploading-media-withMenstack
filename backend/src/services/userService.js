import User from "../models/userModel.js"
import bcryt from "bcrypt"

export const createUserService = async (dataForm) => {
    try {
        const { userName, email, password } = dataForm;
        const hashedPassword = await bcryt.hash(password, 10);
        const newUser = new User({
            userName,
            email,
            password: hashedPassword
        });
        const saveUser = await newUser.save();
        console.log("user created account successfuly");
        return saveUser;
    } catch (error) {
        console.log(error)
    }
};