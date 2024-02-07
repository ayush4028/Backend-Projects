const express = require("express");
const app = express();


// Listen the server on the port 
require("dotenv").config(); // env file se aapki config load ho 
const PORT = process.env.PORT || 3000;

// Need a middleware to parse json request request body 
app.use(express.json());


// import routes for Todo API
const todoRoutes = require("./routes/todos");


// mount the todo API routes
app.use("/api/v1", todoRoutes);


// start server
app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})


// connect to the database
const dbConnect = require("./config/database");
dbConnect();

// default Route
app.get("/", (req,res) => {
    res.send(`<h1>This is HOMEPAGE baby</h1>`);
})

 