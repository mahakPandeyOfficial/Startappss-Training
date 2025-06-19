import express from "express";

const hostRouter = express.Router();

hostRouter.get("/host/add-home", (req, res, next) => {
    
    res.send(`<h1>Register your Home here: </h1>
        <form action="/host/add-home" method="POST">
            <label>Home Name:</label>
            <input type="text" name="homeName" placeholder="Enter your home name" required />
            
            <label>Location:</label>
            <input type="text" name="location" placeholder="Enter the location" required />

            <label>Price:</label>
            <input type="number" name="price" placeholder="Enter the price per night" required />
            
            <input type="submit" />
        </form>`);
});

hostRouter.post("/host/add-home", (req, res, next) => {
    
    //This is where we would typically save the home data to a database and here we are using body-parser middlware to parse the frm and get the data on the server
    res.send(`<h1>Home Registered Successfully</h1>
        <p>Home Name: ${req.body.homeName}</p>        
        <p>Location: ${req.body.location}</p>
        <p>Price per night: $${req.body.price}</p>
        <a href="/">Go to Home Page</a>
       `);
});

export default hostRouter;