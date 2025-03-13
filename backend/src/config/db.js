import mongoose from "mongoose";

export const connectDb = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log({message: "database connected :",  data: conn.connection.host})
    } catch (error) {
        console.log({message: "connection failed",  error : error.message})
        process.exit(1);
    }
}