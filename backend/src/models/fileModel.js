import mongoose from "mongoose";

const FileSchema = new mongoose.Schema({
    filename: String,
    path: String,
}, { timestamps: true });

const File = mongoose.model("File", FileSchema);
export default File;
