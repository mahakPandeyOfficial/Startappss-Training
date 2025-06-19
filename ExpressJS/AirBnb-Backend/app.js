//external modules

import express from 'express';
import bodyparser from "body-parser";

//local modules

import userRouter from "./routes/userRouter.js";
import hostRouter from "./routes/hostRouter.js";

const app = express();
const PORT = 8000;

// Middleware 
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies

app.use(userRouter);
app.use(hostRouter);

app.use((req, res, next)=> {
    res.status(400).send(`<h1>404 Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <a href="/">Go to Home Page</a>`);
})


app.listen(PORT, ()=> {
    console.log(`Server is running on the port http://localhost:${PORT}`);
})