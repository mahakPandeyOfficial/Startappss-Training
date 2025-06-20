//Core modules
import path from 'path';
import { fileURLToPath } from 'url';

// External modules

import express from "express";
const userRouter = express.Router();

//Local Modules
import { rootDir } from '../utils/pathUtil.js'; // Importing the path utility module

// ✅ Manually define __dirname for ES Modules


userRouter.get("/", (req, res, next) => {
    console.log(req.url, req.method);
    res.sendFile(path.join( rootDir, 'views', 'home.html'));
});

export default userRouter;
