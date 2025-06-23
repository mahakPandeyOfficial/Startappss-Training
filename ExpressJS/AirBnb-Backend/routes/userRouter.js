//Core Modules
import path from 'path';

//External Modules
import express from "express";

//Local Modules
import { rootDir } from '../utils/pathUtil.js';
import { registeredHomes } from './hostRouter.js'; 

const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
    console.log(registeredHomes);
    res.sendFile(path.join(rootDir, 'views', 'home.html'));
});

export default userRouter;
