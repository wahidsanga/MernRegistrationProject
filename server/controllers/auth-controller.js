const User = require("../models/user-model");
const bcrypt = require("bcrypt");

// Home Logic
const home = async (req,res) => {
    try{
        res.status(200).send("Welcome to Home Page.");
    }catch(error) {
        console.log(error)
    }
}

// -----------
// Register logic
// const register = async (req,res) => {
//     try{
//         console.log(req.body);
//         res.status(200).json({ message: req.body });


//         const { username, email, phone, password } = req.body;
        
//         const userExist = await User.findOne({ email: email });
//         if(userExist) {
//             return res.status(400).json({ msg: "email already exists"});
//         }

//         // hash the password:
//         const saltRound = 10;
//         const hash_password = await bcrypt.hash(password, saltRound).then(hash => {
//             console.log('Hash ', hash)
//           })
//           .catch(err => console.error(err.message));

//         const userCreated = await User.create({ 
//             username,
//             email, 
//             phone, 
//             password: hash_password 
//         });

//         // console.log(user.password);

//         // res.status(200).json({ msg: "success" , user : userCreated });
//         // res.status(200).send("Registration Page is here using controllers123!");
//     }catch(error) {
//         //console.log(error);
//         res.status(500).json("internal server error");
//     }
// };

// module.exports = {home, register};
// --------


const register = async (req, res) => {
    try {
        console.log(req.body);

        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(400).json({ msg: "Email already exists" });
        }

        // hash the password:
        const saltRound = 10;
        const hash_password = await bcrypt.hash(password, saltRound);

        const userCreated = await User.create({
            username,
            email,
            phone,
            password: hash_password,
        });

        console.log('Hash', hash_password);

        // res.status(200).json({ msg: "User registered successfully", user: userCreated });
        res.status(201)
        .json({msg: userCreated, token : await userCreated.generateToken(), userId: userCreated._id.toString()});
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal server error");
    }
};

module.exports = { home, register };
