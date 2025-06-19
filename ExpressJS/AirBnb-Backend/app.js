import express from 'express';
import bodyparser from "body-parser";

const app = express();
const PORT = 8000;

// Middleware 

app.listen(PORT, ()=> {
    console.log(`Server is running on the port ${PORT}`);
})