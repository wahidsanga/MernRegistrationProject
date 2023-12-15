require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/auth-router");
const connectDb = require("./utils/db");

app.use(express.json());

//use the router instead for routing as nodemon will constantly look at server.js file if not done:
app.use("/api/auth", router);

// create a route using express and send a response
app.get('/', (req,res) => {
    res.status(200).send("Wahid Hassan is here!");
});

app.get('/register', (req,res) => {
    res.status(200).send("Registration Page is here!");
});
app.get('/home', (req,res) => {
    res.status(200).send("Home Page is here!");
});

const PORT=5000;

// app.listen(PORT, () => {
//     console.log(`server is running at port: ${PORT}`);
// });  

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running at port: ${PORT}`);
    });    
});

