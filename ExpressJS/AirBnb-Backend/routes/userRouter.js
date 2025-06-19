import express from "express";
const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
    console.log(req.url, req.method);
    res.send(`<h1>Welcome to airbnb</h1>
        <a href="/host/add-home">Add Home</a>`);
});

export default userRouter;
