const mongoose = require("mongoose");

require("dotenv").config(); 
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {console.log("Db connection is Successful")})
    .catch((error) => {
        console.log("Issue in db Connection");
        console.error(error.message);

        process.exit(1);
    })
}

module.exports = dbConnect;  // code for backend to call the dBconnect function