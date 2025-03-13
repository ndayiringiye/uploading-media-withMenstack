import File from "../models/fileModel.js";

export const createFile = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        const file = new File({
            filename: req.file.filename,
            path: req.file.path,
        });

        await file.save();
        res.status(201).json({ message: "File uploaded successfully", file });
    } catch (error) {
        res.status(500).json({ message: "File upload failed", error });
    }
};
