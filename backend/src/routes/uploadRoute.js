import express from "express";
import { createFile } from "../controllers/upload.controller.js";
import { upload } from "../storages/filemulter.js"; 

const router = express.Router();

router.post("/upload", upload.single("file"), createFile);

export default router;
