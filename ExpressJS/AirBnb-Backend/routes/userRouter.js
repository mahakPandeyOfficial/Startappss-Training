//Core Modules
import path from 'path';

//External Modules
import express from "express";

//Local Modules
import { rootDir } from '../utils/pathUtil.js';

const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
    console.log(req.url, req.method);
    res.sendFile(path.join(rootDir, 'views', 'home.html'));
});

export default userRouter;
