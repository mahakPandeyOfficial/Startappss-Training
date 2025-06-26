// Core Modules
import path from "path";
import { fileURLToPath } from 'url';

// External modules
import express from "express";
import multer from "multer";

// Local Modules
import { rootDir } from '../utils/pathUtil.js';
import {getAddHomes, postAddHomes} from "../controllers/homes.js";


const hostRouter = express.Router();

// ✅ Define __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Set up multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(rootDir, 'public', 'uploads'));  // Save to /public/uploads
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);  // Unique file name
  }
});

const upload = multer({ storage });

// ✅ In-memory array to store homes
const registeredHomes = [];

// ✅ GET: Add Home Form
hostRouter.get("/add-home", getAddHomes );

// ✅ POST: Handle home form with image upload
hostRouter.post("/add-home", upload.single('photoUrl'), postAddHomes(registeredHomes));

export { hostRouter, registeredHomes };

