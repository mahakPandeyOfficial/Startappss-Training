// Core Modules
import path from 'path';

// External Modules
import express from "express";

// Local Modules
import { rootDir } from '../utils/pathUtil.js';
import { registeredHomes } from './hostRouter.js'; 
import { getHomes } from "../controllers/homes.js";

// ✅ Declare router before using it
const userRouter = express.Router();

// ✅ Now it's safe to use
userRouter.get("/", getHomes(registeredHomes));

export default userRouter;
