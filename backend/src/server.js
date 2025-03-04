import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import userRouter from "./routes/userRoute.js"
dotenv.config();
const app = express();
app.use(express.json());
app.use("/api/user", userRouter);
const PORT = process.env.PORT || 4000;

app.listen(PORT, async () => {
    await connectDb();
    console.log(`server is run on port ${PORT}`)
});
