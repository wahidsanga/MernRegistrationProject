const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller")
// alternate way
//const {home, register} = require("../controllers/auth-controller")

// router.get("/", (req,res) => {
//     res.status(200).send("Welcome to Home Page.");
// });

//------
// alternate way to write same code
// router.route("/").get((req,res) => {
//     res.status(200).send("Welcome to Home Page.");
// });

//The above code can be now written like:
router.route("/").get(authControllers.home);

//similarly, for register page
router.route("/register").post(authControllers.register);

module.exports = router;