//Core Modules
import path from "path";
import { fileURLToPath} from 'url';

//External modules
import express from "express";

//Local Modules
import { rootDir } from '../utils/pathUtil.js';// Importing the path utility module

const hostRouter = express.Router();

// ✅ Manually define __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

hostRouter.get("/add-home", (req, res, next) => {
    
    res.sendFile(path.join( rootDir, 'views', 'addHome.html'));
});

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
    console.log("Home is registered successfully: ", req.body, req.body.title);
    registeredHomes.push({homeName: req.body.title, description: req.body.description, price: req.body.price});
    //This is where we would typically save the home data to a database and here we are using body-parser middlware to parse the frm and get the data on the server
    res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'));
});

export { hostRouter, registeredHomes };
