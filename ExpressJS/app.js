import express from "express";
import bodyParser from "body-parser";
const app = express();
const PORT = 8000;

// Middleware
app.use((req, res, next) => {
  console.log("This is first dummy middleware", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("This is second dummy middleware", req.url, req.method);
  next();
});

// ✅ Final route (response sender)
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/contact-us", (req, res) => {
  res.send(`<h1>Contact Us Page</h1>
        <p>For any queries, please reach out to us at <a href="mailto:" ></a>
                </p>
                <form action="/contact-us" method="POST">
                    <label>Email:</label>
                    <input type="text" name="email" placeholder="Enter your email" />
                    
                    <label>Message:</label>
                    <input type="text" name="message" placeholder="Enter your message" />
                    
                    <button type="submit">Submit</button>
                </form>`);
});

app.post("/contact-us", (req, res, next) => {
  console.log("First handling contact us post req", req.url, req.method);
  next();
});

//body parser middleware : currently not in used as it is deprecated
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.urlencoded({ extended: true })); // Now this is used with upgraded express js

app.post("/contact-us", (req, res, next) => {
  console.log("Thank you for contacting us!", req.url, req.method, req.body);
  res.send("Thank you for contacting us!");
});

// Listener
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
