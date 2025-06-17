import express from 'express';
const app = express();
const PORT = 8000;

// Middleware
app.get((req, res, next) => {
    console.log("This is first dummy middleware");
    next(); 
});

app.use((req, res, next ) => {
    console.log("This is second dummy middleware");
    
});



//Listener
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
