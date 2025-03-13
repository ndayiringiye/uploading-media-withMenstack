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

export const userLogninService = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        if (!user) {
            res.status(400).json({ message: "user not found" });
        }
        const isMacth = await bcryt.compare(password, user.password);
        if (!isMacth) {
            res.status(400).json({ message: "invalid credential" });
        }
        const token = jwt.asign({ userId: user._Id }, process.env.JWT_SECRETE, { expireIn: "1hr" });
        res.json({ token, user: { Id: user._Id, username: user.username, email: user.email, password: user.password } });
    } catch (error) {
        res.status(500).json({ "error": error.message })
    }
}