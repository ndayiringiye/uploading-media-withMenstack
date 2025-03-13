import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import uploadRouter from "./routes/uploadRoute.js"; 
import cors from "cors";

dotenv.config();
const app = express();

app.use(express.json()); 
app.use(cors());

app.use("/user", userRouter);
app.use("/api", uploadRouter);

const PORT = process.env.PORT || 4000;
connectDb().then(() => {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
}).catch((err) => console.error("Database connection failed:", err));
