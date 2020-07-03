const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const keys = require("../../config/keys");
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

const User = require("../../models/User");


router.post("/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: "Email already exists" });
        } else {
            const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
            });
        bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
        });
    }
    });
});


// POST - LOGIN a user and return JWT token - 
// 1. Const.. Pull the errors and isValid variables from our validateLoginInput(req.body) function and check input validation
// 2. if.. Checks validation
// 3. user.findOne.. Find user by email then checks if they exist in db
// 4. bcrypt.compare.. If user exists, use bcryptjs to compare submitted password with hashed password in our database 
// 5. if.. passwords match, create jwt payload and sign jwt

router.post("/login", (req, res) => {
const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email }).then(user => {
        if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found" });
        }
        bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
            const payload = { id: user.id, name: user.name };
            jwt.sign( payload, keys.secretOrKey, (err, token) => {
                res.json({success: true, token: "Bearer " + token});
            });
        } else {
            return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
        });
    });
});

module.exports = router;