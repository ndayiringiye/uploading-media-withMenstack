import mongoose from "mongoose";

export const connectDb = async () =>{
    try {
        const conn = await mongoose.connect("mongodb+srv://ndayiringiyedavid120:Ramyf8Naj1qgsesc@cluster0.pqv6w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log({message: "database connected :",  data: conn.connection.host})
    } catch (error) {
        console.log({message: "connection failed",  error : error.message})
        process.exit(1);
    }
}