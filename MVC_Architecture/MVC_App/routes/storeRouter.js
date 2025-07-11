// Core Modules
import path from 'path';

// External Modules
import express from "express";

// Local Modules
import { rootDir } from '../utils/pathUtil.js';
import { registeredHomes } from './hostRouter.js'; 
import { getHomes , getBooking, getFavorites, getIndex } from "../controllers/storeController.js";

// ✅ Declare router before using it
const storeRouter = express.Router();

// ✅ Now it's safe to use
storeRouter.get("/", getIndex(registeredHomes));
storeRouter.get("/homes", getHomes(registeredHomes));
storeRouter.get("/bookings", getBooking);
storeRouter.get("/favorites", getFavorites);

export default storeRouter;
