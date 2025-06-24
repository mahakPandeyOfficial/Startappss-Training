// Core Modules
import path from "path";
import { fileURLToPath } from 'url';

// External modules
import express from "express";
import multer from "multer";

// Local Modules
import { rootDir } from '../utils/pathUtil.js';

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
hostRouter.get("/add-home", (req, res) => {
  res.render("addHome", { pageTitle: "Add Home" });
});

// ✅ POST: Handle home form with image upload
hostRouter.post("/add-home", upload.single('image'), (req, res) => {
  const { title, description, price } = req.body;
  const image = req.file ? req.file.filename : null;

  console.log("Home registered successfully:", { title, description, price, image });

  registeredHomes.push({
    title,
    description,
    price,
    image
  });

  res.render("homeAdded", { pageTitle: "Home Added Successfully" });
});

export { hostRouter, registeredHomes };
