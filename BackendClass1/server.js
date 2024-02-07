// Server Instantiate
const express = require('express');
const app = express();

// activate the server on port 3000
app.listen(3000, () => {
    console.log("Server started at port no. 3000");
});

// Used to parse req.body in express -> PUT or POST
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // specifically parse the json data & add it to the request.Body object

const mongoose = require("mongoose")
mongoose.connect('mongodb://127.0.0.1:27017/mydata',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {console.log('connection successful')})
.catch((error) => {console.log('recieved an error')})



// Routes
app.get('/', (request, response) => {
    response.send("Hello Jee, kaise ho sarre");
})

app.post('/api/cars', (request, response) => {
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car submitted successfully");
})



