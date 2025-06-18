import express from 'express';
const app = express();
const PORT = 8000;

// Middleware
app.use((req, res, next) => {
    console.log("This is first dummy middleware", req.url, req.method);
    next(); 
});

app.use((req, res, next) => {
    console.log("This is second dummy middleware", req.url,  req.method);
    next();
});


// ✅ Final route (response sender)
app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/contact-us', (req, res) => {
    res.send(`<h1>Contact Us Page</h1>
        <p>For any queries, please reach out to us at <a href="mailto:" ></a>
                </p>
                <form action="/contact-us" method="POST" >
                <label>Email:</label>
                    <input type="text" placeholder="Enter your email" />
                <label>Message:</label>
                    <input type="text" placeholder="Enter your message" />
                    <button type="submit">Submit</button>
                    </form>`);
                

});

app.post('/contact-us', (req, res, next)=> {
    console.log("Thank you for contacting us!", req.url, req.method);
    res.send('Thank you for contacting us!');
})

// Listener
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
