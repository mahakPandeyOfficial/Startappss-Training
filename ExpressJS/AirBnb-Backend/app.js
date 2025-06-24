//Core Modules
import path from 'path';
import { fileURLToPath } from 'url';

//external modules 

import express from 'express';
import bodyparser from "body-parser";

//local modules

import userRouter from "./routes/userRouter.js";
import { hostRouter } from "./routes/hostRouter.js";

const app = express();
const PORT = 8000;

// ✅ Manually define __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Local Modules
import { rootDir } from './utils/pathUtil.js';

app.set('view engine', 'ejs');  // Setting up EJS as the template engine
app.set('views', path.join(rootDir, 'views'));  // Setting the views directory for EJS templates

// Middleware 
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies

app.use(userRouter);
app.use("/host", hostRouter);          //This is the good way to handle common routes like /host/add-home etc as  It will concanate the /host with the hostRouter and we can handle all the routes related to host in the hostRouter file.

app.use(express.static(path.join(rootDir, 'public'))); // To serve static files from the public directory

app.use((req, res, next)=> {
    //res.status(404).sendFile(path.join(rootDir,  'views', '404error.ejs'));
    res.status(404).render("404error", {pageTitle: "404 error"});
})


app.listen(PORT, ()=> {
    console.log(`Server is running on the port http://localhost:${PORT}`);
})